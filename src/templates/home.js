import html from 'choo/html'

import galleryView from 'views/gallery'
import searchView from 'views/search'

export default function homeView(state, emit) {
  return html`
      <div>
        <div class="ink-sepia banner">
            <div class="title">
              <img class="logo" src="${state.imgPath}style/logo_PeterSharpAll.svg" alt="Peter Sharp's portfolio logo">

            </div>
            ${searchView(state, emit)}
        </div>

        ${galleryView(state, emit)}
      </div>`
}
