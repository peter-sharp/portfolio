const { html } = require('../html.js')

module.exports = function gallery(items) {
    return html`
            <ul class="gallery">
                  ${items.map(({ data, url }, i) => {
                      const id = data.id || `gallery_item_${i}`;
                     return html`
                    <li class="gallery__card  card stack stack--gap-small" id="${id}">
                        <figure>
                            <a href="${url}" class="card__image-clip ">
                            ${data.mediaPaths ?
                         html`<img class="card__image" src="/uploads/${data.mediaPaths.thumbnail || data.mediaPaths.original}" alt="${data.title}"/>` :
                        html`<div class="card__image-placeholder"></div>`}
                            </a>
                            <figcaption class="card__title visually-hidden" >${data.title}</figcaption>
                        </figure>
                    </li>`
                  })
                  }
            </ul>`
}