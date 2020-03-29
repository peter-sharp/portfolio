const { html } = require('./_includes/html.js')
const gallery = require('./_includes/components/gallery.js')

module.exports.data = {
    title: 'Home',
    menuIndex: 0,
    tags: 'page',
    layout: 'layouts/index.11ty.js'
}

module.exports.render = function render({ collections }) {
    return html`<div>
        <div class="section">
            ${gallery(collections.gallery)}
        </div>
        <article class="h-card section">
            <figure class="section__inside stack stack--gap-medium">
                <div class="user-icon-frame">
                    <img class="u-logo image--responsive user-icon-frame__image" src="/uploads/peter-like-a-sir.png"/>
                </div>
                <figcaption>I'm <span class="p-name">Peter</span> </figcaption>
            </figure>
        </article>
    </div>`.toString()
}
