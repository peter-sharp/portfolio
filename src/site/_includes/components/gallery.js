const { html } = require('../html.js')

module.exports = function gallery(items) {
    return html`<ul class="gallery">
                  
                  ${items.map(({ data, url }) => html`
                  <li class="gallery__card card" id="${data.id}">
                      <a href="${url}" >
                          ${data.mediaPaths ? html`<img class="card__image" src="/uploads/${data.mediaPaths.small}" alt="${data.title}"/>` : ''}
                          <h3 class="card__title" >${data.title}</h3>
                      </a>
                  </li>`)}
              </ul>`
}