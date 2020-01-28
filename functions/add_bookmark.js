/* Webhook from Zapier when Zapier gets email
  create github file and post
*/
require('dotenv').config()

const Octokit = require('@octokit/rest');

const slugify = require('slugify');

const BRANCH = 'master';

exports.handler = async function postByEmail(event, context) {
    if (!event.body || typeof event.body != 'string') return { statusCode: 400, body: 'Missing request body' };
    const { url, name, tags } = JSON.parse(event.body );
    const { GITHUB_USER: owner, GITHUB_TOKEN: token, GITHUB_REPO: repo } = process.env;

    if (!url || !name) return { statusCode: 400, body: 'Missing url or name' };
    const date = currentISODate()

    let commit;
    try {
        const octokit = new Octokit({
            auth: token,

            userAgent: 'octokit/rest.js v16.28.9',

            log: {
                debug: console.debug,
                info: console.info,
                warn: console.warn,
                error: console.error
            },
            
        });

        const branch = await getBranchReference(octokit);

        const tree = await createTree(octokit, {
            url,
            name,
            tags,
            base_tree: branch,
        })
        commit = await commitTheFiles(octokit, {
            name,
            tree,
            branch,
            date
        })

        await octokit.git.updateRef({
            owner,
            repo,
            ref: `heads/${BRANCH}`,
            sha: commit.data.sha
        })

    } catch(err) {
        console.error(err)
        return {
            statusCode: 400,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: err.message, data: err })
        };
    }
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message:'Bookmark created', commit })
    };
    

    async function getBranchReference(octokit) {
        const ref = await octokit.git.getRef({
            owner,
            repo,
            ref: `heads/${BRANCH}`
        });

        return ref.data.object.sha;
    }

    

    // Create a tree ready to commit
    async function createTree(octokit, {
        url, 
        name, 
        tags = ['bookmark'],
        date,
        base_tree
    }) {
        
       
        const content = `---
title: ${name}
tags: ${JSON.stringify(tags)}
date: ${date}
---
`;
        
        const tree = [{
            path: `src/site/bookmarks/${slugify(name+'-'+url)}.md`,
            mode: '100644',
            type: 'blob',
            content
        }];

        const res = await octokit.git.createTree({
            owner,
            repo,
            tree,
            base_tree
        });
        return res.data.sha
    }

    function commitTheFiles(octokit, { name, tree, branch, date }) {
        // const author = getContactDetails()
        // author.date = date
        // console.info(author)
        return octokit.git.createCommit({
            owner,
            repo,
            message: `New bookmark: ${name} ${date}`,
            tree,
            parents: [branch],
            // author,
        });
    }

    // function getContactDetails() {
    //     return {
    //         name: 'Peter',
    //         email: 'peter.victor.sharp@gmail.com'
    //     };
    // }

    function currentISODate() {
        return (new Date()).toISOString()
    }

};