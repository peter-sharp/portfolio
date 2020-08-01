const { html } = require('./_includes/html.js')
const timeline = require("./_includes/components/timeline.js");

module.exports.data = {
    title: 'USA 2020',
    layout: 'layouts/themed-blog.11ty.js'
}

module.exports.render = function render({ title, collections }) {
    return html`<div>
        <h1 class="page-title usa-stars">${title}</h1>
        <div class="page-title__bottom usa-stripes-horizontal"></div>
        <main class="section">
            <div class="section__inside">
                ${timeline(collections.usa2020)}
            </div>
        </main>
    </div>`.toString();
}