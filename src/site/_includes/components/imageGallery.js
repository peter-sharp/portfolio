const { html } = require('../html.js');
const basename = require('../basename.js');

module.exports = function imageGallery(items) {
    return html`<ul class="gallery">  
${items.map(({ url, title }, i) => {
    let thumbnailPath = `sizes/thumbnail/${basename(url)}`;
    return html`<li class="gallery__card card" id="gallery_image_${i}">
    <a href="/uploads/${url}" class="stack stack--gap-small">
        <div class="card__image-clip">
            <img class="card__image" src="/uploads/${thumbnailPath}" alt="${title}"/>
        </div>
        <h3 class="card__title" >${title}</h3>
    </a>
</li>`
})}
</ul>`
}