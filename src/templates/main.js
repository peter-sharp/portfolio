import html from 'choo/html'
import navView from 'views/nav';
export default function mainView (page, state, events) {
  return html`
      <main>
        ${navView(state, events)}

        <div class="book">
            <div class="content-wrapper">
                ${page(state, events)}

                <footer>
                    <hr>
                    <span>To find out more about what I can do for you; <a ui-sref="contact">contact me</a></span>
                </footer>
            </div>
        </div>
      </main>`
}
