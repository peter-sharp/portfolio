const { html } = require('../html.js')

module.exports = function gallery(items) {
    return html`<ul class="gallery">
                  
                  ${items.map(({ data, url }) => html`
                  <li class="gallery__item" id="${data.id}">
                      <a href="${url}" >
                          <img class="image--small" src="/uploads/${data.mediaPaths.small}" alt="${data.title}"/>
                          <h3>${data.title}</h3>
                      </a>
                  </li>`)}
              </ul>`
}