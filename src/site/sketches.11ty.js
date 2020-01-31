const { html } = require('./_includes/html.js')
const gallery = require('./_includes/components/gallery.js')

module.exports.data = {
    title: 'Sketches',
    tags: 'page',
    layout: 'layouts/index.11ty.js'
}

module.exports.render = function render({ collections }) {
    return html`<div class="section">
            <div class="section__inside">${gallery(collections.sketch)}</div>
        </div>`.toString()
}