const { html, raw } = require('../html.js')

module.exports = function timeline(items) {
    return html`<ul class="timeline stack">
        ${items.map(
            ({ data, templateContent }) => html` <li
                class="timeline__card card"
                id="${data.id}"
            >
                ${data.title ? html`<h3 class="card__title">${data.title}</h3>` : ''}
                ${raw(templateContent)}
            </li>`
        )}
    </ul>`;
}