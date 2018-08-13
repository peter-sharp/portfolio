import html from 'choo/html'

export default function notFoundView(state, events) {
  return html`
  <div>
      <h1>I say!</h1>
      <h2>You appear to be heading towards uncharted teritory!</h2>
      <p><a href="/">Click here</a> to get your bearings.</p>
  </div>`
}
