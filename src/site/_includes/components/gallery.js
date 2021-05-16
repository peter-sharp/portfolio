const { html } = require('../html.js')

module.exports = function gallery(items) {
    return html`
            <ul class="gallery">
                  ${items.map(({ data, url }, i) => {
                      const id = data.id || `gallery_item_${i}`;
                     return html`
                    <li class="gallery__card card" id="${id}">
                            <div class="card__image-clip">
                            ${data.mediaPaths ?
                         html`<img class="card__image" src="/uploads/${data.mediaPaths.thumbnail || data.mediaPaths.original}" alt="${data.title}"/>` :
                        html`<div class="card__image-placeholder"></div>`}
                            </div>
                            <h3 class="card__title" ><a href="${url}" class="card__link">${data.title}</a></h3>
                    </li>`
                  })
                  }
            </ul>`
}