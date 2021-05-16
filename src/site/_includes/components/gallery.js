const { html } = require('../html.js')

module.exports = function gallery(items) {
    return html`
            <ul class="gallery">
                  ${items.map(({ data, url }, i) => {
                      const id = data.id || `gallery_item_${i}`;
                     return html`
                    <li class="gallery__card ${data.featured && 'featured-card'} card stack stack--gap-small" id="${id}">
                            <div class="card__image-clip ${data.featured && 'featured-card__image-clip image-wrapper'}">
                            ${data.mediaPaths ?
                         html`<img class="card__image" src="/uploads/${data.featured ? data.mediaPaths.original : data.mediaPaths.thumbnail || data.mediaPaths.original}" alt="${data.title}"/>` :
                        html`<div class="card__image-placeholder"></div>`}
                            </div>
                            <h3 class="card__title" ><a href="${url}" class="card__link">${data.title}</a></h3>
                    </li>`
                  })
                  }
            </ul>`
}