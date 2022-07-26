const { html } = require('./_includes/html.js')
const gallery = require('./_includes/components/gallery.js')

module.exports.data = {
    title: 'Home',
    menuIndex: 0,
    tags: 'page',
    layout: 'layouts/index.11ty.js'
}

module.exports.render = function render({ collections }) {
    return html`<div class="stack" data-gap="large">
        <article class="h-card section">
            <figure class="cluster"  data-state="align-middle">
                <div class="user-icon-frame">
                    <img class="u-logo image--responsive user-icon-frame__image" src="/uploads/peter-like-a-sir.png"/>
                </div>
                <figcaption>I'm <span class="p-name">Peter</span>: developer, designer and creative.<br> This my space to show off my creative work.</figcaption>
            </figure>
        </article>
        <div>
            ${gallery(collections.gallery)}
        </div>
        
        <div class="cluster section center">
            <p>Need help with illustration or design?</p>
            <a href="/contact" class="button" >Hire me</a>
        </div>
    </div>`.toString()
}
