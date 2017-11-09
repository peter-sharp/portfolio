import html from 'choo/html'
export default function navView(state, emit) {
  return html`
  <header>
      <nav class="menu-hide-anim ${state.menuHidden ? 'hidden' : ''}">
        <ul>${
           state.pages.map((page) => html`<li class=""><a href="${page.link}" >${page.title}</a></li>`)
          }
        </ul>
      </nav>
      <div class="menu-button" onClick=${toggleMenu}></div>
  </header>`

  function toggleMenu() {
    emit(state.events.TOGGLE_MENU);
  }
}
