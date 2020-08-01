const { html, raw } = require('../html.js')
const format = require('date-fns/format');
// const { format } = require("date-fns-tz");

module.exports = function timeline(items) {
    return html`<ul class="timeline stack">
        ${items.map(
            ({ data, date, templateContent }) => html` <li
                class="timeline__card card"
                id="${data.id}"
            >
                <h3 class="card__title">
                    ${// format(new Date(date.toUTCString()), "MMM dd yyyy")
                    date.toUTCString().split(' ').slice(0,3).join(' ')}
                    ${data.title}
                </h3>
                ${raw(templateContent)}
            </li>`
        )}
    </ul>`;
}