const { html } = require('../html.js');
const { raw } = require('../html.js');
const cursor = require('../components/cursor.js')

module.exports.render = function render({ title, page, content }) {
return html`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" type="image/png" href="favicon.png" />
            <title>${title}</title>
            <base href="/" />
            <link rel="stylesheet" href="/${page.fileSlug}.css" />
        </head>
        <body>
            ${raw(content)}
        </body>
    </html>
`.toString();
}

function reverse(arr) {
    let rev = [...arr].reverse();
    return rev;
}