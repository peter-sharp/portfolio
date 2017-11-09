import html from 'choo/html'

import galleryView from 'views/gallery'

export default function homeView(state, events) {
  return html`
      <div>
        <div class="ink-sepia banner">
            <div class="title">
              <img class="logo" src="{{pictureBasePath}}style/logo_PeterSharpAll.svg" alt="Peter Sharp's portfolio logo">

            </div>
            <select-box sb-options=",3D,illustration,web-design,animation" name="search" id="">
            </select-box>
        </div>

        ${galleryView(state, events)}
      </div>`
}
