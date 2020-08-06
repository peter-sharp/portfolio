const { html } = require('../html.js')

module.exports = function gallery(items) {
    return html`
            <ul class="gallery">
                  ${items.map(({ data, url }, i) => {
                      const id = data.id || `gallery_item_${i}`;
                     return html`
                    <li class="gallery__card card" id="${id}">
                        <a href="${url}" class="stack stack--gap-small">
                            <div class="card__image-clip">
                            ${data.mediaPaths ?
                         html`<img class="card__image" src="/uploads/${data.mediaPaths.thumbnail || data.mediaPaths.original}" alt="${data.title}"/>` :
                        html`<div class="card__image-placeholder"></div>`}
                            </div>
                            <h3 class="card__title" >${data.title}</h3>
                        </a>
                    </li>`
                  })
                  }
            </ul>`
}