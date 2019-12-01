const { html } = require('../html.js');
const { raw } = require('../html.js');

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
    <body>
      <header>
        <nav class="nav-main">
          <ul class="nav-main__items" >
            ${collections.page.map(
              ({ data, url: itemUrl }) => html`
                <li
                  class="nav-item ${itemUrl == page.url
                    ? "nav-item--active"
                    : ""}"
                >
                  <a href="${itemUrl}">${data.title}</a>
                </li>
              `
            )}
          </ul>
        </nav>
      </header>
      <main>
        ${raw(content)}
      </main>
      <footer class="section">
        <div class="section__inside">
          <a href="/contact">Send me a telegram</a>
        </div>
      </footer>
    </body>
  </html>
`.toString();
}