import html from 'choo/html'
export default function navView(state, emit) {

  return html`
  <header>
      <nav class="menu-hide-anim ${state.menuHidden ? 'hidden' : ''}">
        <ul>${
           state.pages.map((page) => html`<li><a href="${page.link}"  class="${activeClass(page.link, state.href)}" >${page.title}</a></li>`)
          }
        </ul>
      </nav>
      <div class="menu-button" onClick=${toggleMenu}></div>
  </header>`

  function toggleMenu() {
    emit(state.events.TOGGLE_MENU);
  }
}

function activeClass(link, href) {
  link = link.replace('/', '')
  href = href.replace('/', '')
  return link == href ? 'active' : ''
}
