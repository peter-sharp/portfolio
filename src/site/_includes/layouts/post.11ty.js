const { html } = require('../html.js');
const { raw } = require('../html.js');

module.exports.data = {
    layout: "layouts/index.11ty.js"
}

module.exports.render = function render({ content, mediaPaths }) {
    mediaPaths = mediaPaths || {}
    return html`<div class="section">
        <figure class="section__inside">
            <img class="image--responsive" src="/uploads/${mediaPaths.original}">
            <figcaption>${raw(content)}</figcaption>
        </figure>
    </div>`.toString()
}