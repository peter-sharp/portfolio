import html from 'choo/html'
import navView from 'views/nav';
export default function mainView (state, events) {
  return html`
      <div>
        ${navView(state, events)}

        <main class="book">
            <div class="content-wrapper">
              <div class="view-frame"><span class="loader"></span></div>

                <footer>
                    <hr>
                    <span>To find out more about what I can do for you; <a ui-sref="contact">contact me</a></span>
                </footer>
            </div>
        </main>
      </div>`
}
