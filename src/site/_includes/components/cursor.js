const { html } = require('../html.js');

module.exports = function cursor({parentClass, active}) {
    return html`
      <div class="${parentClass}__cursor cursor ${active ? "cursor--active" : ""}">
        <div class="cursor__outer">
          <div class="cursor__inner"></div>
        </div>
      </div>
    `;
}