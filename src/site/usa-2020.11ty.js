const { html } = require('./_includes/html.js')
const timeline = require("./_includes/components/timeline.js");

module.exports.data = {
    title: 'USA 2020',
    layout: 'layouts/index.11ty.js'
}

module.exports.render = function render({ collections }) {
    return html`<div class="section">
        <div class="section_inside">
                ${timeline(collections.usa2020)}
        </div>
    </div>`.toString();
}