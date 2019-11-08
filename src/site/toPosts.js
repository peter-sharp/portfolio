const yaml = require('js-yaml');
const fs = require('fs');

// Get document, or throw exception on error
let posts;
try {
    posts = yaml.safeLoad(fs.readFileSync('./../../media/media.yml', 'utf8'));
   
} catch (e) {
    console.log(e);
}

posts.forEach((post) => {
    const caption = post.caption;
    const id = post.id;
    delete post.caption;
    const content = '---\n'+
    yaml.safeDump(post)+
    '---\n'+
    caption;
    fs.writeFileSync(`./posts/${id}.md`, content)
});