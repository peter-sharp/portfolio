const { html } = require('../html.js');
const { raw } = require('../html.js');
const cursor = require('../components/cursor.js')

module.exports.render = function render({ site, title, page, content, collections }) {
return html`
  <!DOCTYPE html>
  <html lang="en" ng-app="portfolioApp">
    <head>
      <meta charset="UTF-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="favicon.png" />
      <title>${title} | ${site.title}</title>
      <base href="/" />
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body class="sticky-footer">
      <header>
        <nav class="nav-main">
          <ul class="nav-main__items">
            ${reverse(collections.page).map(
              ({ data, url: itemUrl }) => html`
                <li
                  class="nav-item ${itemUrl == page.url
                    ? "nav-item--active"
                    : ""}"
                >
                  <a class="nav-item__link" href="${itemUrl}">${data.title}</a>
                  ${cursor({
                    parentClass: "nav-item",
                    active: itemUrl == page.url
                  })}
                </li>
              `
            )}
          </ul>
        </nav>
      </header>
      <main class="sticky-footer__content">
        ${raw(content)}
      </main>
      <footer class="section sticky-footer__footer">
        <div class="section__inside">
          <a href="/contact">Send me a telegram</a>
        </div>
      </footer>
    </body>
  </html>
`.toString();
}

function reverse(arr) {
    let rev = [...arr].reverse();
    return rev;
}