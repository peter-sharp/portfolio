const { html } = require('../html.js');
const { raw } = require('../html.js');
const breadcrumbs = require('../components/breadcrumbs.js')
const getCollectionLink = require('../getCollectionLink.js')

module.exports.data = {
    layout: "layouts/index.11ty.js"
}

module.exports.render = function render({ content, mediaPaths, title, page }) {
  
    return html`<div class="stack">
        
        <div class="section">
            ${breadcrumbs([title, getCollectionLink(page.filePathStem)])}
        </div>
       
         ${
        mediaPaths ? html`<figure class="stack">
            <a href="/uploads/${mediaPaths.original}" class="image-wrapper">
              <img class="image--responsive-restricted image-wrapper__img" src="/uploads/${mediaPaths.original}">
            </a>
            <figcaption class="section">${raw(content)}</figcaption>
        </figure>
         ` : html`${raw(content)}`
    }
    </div>`.toString()
}