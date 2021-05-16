const { html } = require('../html.js');
const { raw } = require('../html.js');
const cursor = require('../components/cursor.js')
const isActive = require('../isActive.js')

module.exports.render = function render({ site, title, page, content, collections }) {
return html`
    <!DOCTYPE html>
    <html lang="en" ng-app="portfolioApp">
        <head>
            <meta charset="UTF-8" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" type="image/png" href="favicon.png" />
            <title>${title} | ${site.title}</title>
            <base href="/" />
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body class="sticky-footer stack stack--gap-large">
            <header class="site-header">
                <h1 class="site-title">
                  <a href="/" class="site-title__link">
                  ${raw(this.svgContents('/src/site/logo.svg', 'site-logo'))}<span class="site-title__text">Peter Sharp</span>
                  </a>
                </h1>
                <nav class="site-nav">
                    <ul class="site-nav__items">
                        ${reverse(collections.mainMenu).map(
                            ({ data, url: itemUrl }) => html`
                                <li
                                    class="nav-item ${isActive(itemUrl, page)
                                        ? "nav-item--active"
                                        : ""}"
                                >
                                    <a class="nav-item__link" href="${itemUrl}"
                                        >${data.title}</a
                                    >
                                    ${cursor({
                                        parentClass: "nav-item",
                                        active: isActive(itemUrl, page),
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
                <div class="">
                    <a href="/contact">Hire me</a>
                </div>
            </footer>
        </body>
    </html>
`
}

function reverse(arr) {
    let rev = [...arr].reverse();
    return rev;
}
