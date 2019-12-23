const { html } = require('../html.js');
const { raw } = require('../html.js');
const breadcrumbs = require('../components/breadcrumbs.js')
const getCollectionLink = require('../getCollectionLink.js')

module.exports.data = {
    layout: "layouts/index.11ty.js"
}

module.exports.render = function render({ content, mediaPaths, title, page }) {
    mediaPaths = mediaPaths || {}
    return html`<div class="section">
        <figure class="section__inside">
            ${breadcrumbs([title, getCollectionLink(page.filePathStem)])}
            <img class="image--responsive" src="/uploads/${mediaPaths.original}">
            <figcaption>${raw(content)}</figcaption>
        </figure>
    </div>`.toString()
}