const { html } = require('../html.js')

module.exports = function breadcrumbs([current, ...parents]) {
    return html`<ol class="breadcrumbs">
                  ${parents.map(({ title, url }, i) => html`
                  <li class="breadcrumbs__breadcrumb" id="breadcrumb_parent_${i}">
                      <a href="${url}" >${title}</a>
                  </li>`)}
                  <li class="breadcrumbs__breadcrumb breadcrumb--current" id="breadcrumb_current">
                      ${current}
                  </li>
              </ol>`
}