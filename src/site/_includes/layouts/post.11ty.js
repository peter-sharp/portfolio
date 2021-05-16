const { html } = require('../html.js');
const { raw } = require('../html.js');
const breadcrumbs = require('../components/breadcrumbs.js')
const getCollectionLink = require('../getCollectionLink.js')

module.exports.data = {
    layout: "layouts/index.11ty.js"
}

module.exports.render = function render({ content, mediaPaths, title, page }) {
  
    return html`<div  class="section">
      
        ${breadcrumbs([title, getCollectionLink(page.filePathStem)])}
       
         ${
        mediaPaths ? html`<figure>
            <a href="/uploads/${mediaPaths.original}">
              <img class="image--responsive-restricted" src="/uploads/${mediaPaths.original}">
            </a>
            <figcaption>${raw(content)}</figcaption>
        </figure>
         ` : html`${raw(content)}`
    }
    </div>`.toString()
}