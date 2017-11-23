import html from 'choo/html'

import contactForm from 'views/contactForm'

export default function contactView(state, emit) {
  return html`<div>
                  <div class="portrait">
                      <img class="responsive" src="${state.imgPath}content/peter-like-a-sir.png"/>
                  </div>

                  <p class="self-intro drop-cap">
                      My name is Peter Sharp. I have just graduated Yoobee School of Design with a Diploma of Web Development.
                      I also have a Bachelor of Design from
                      CPIT with majors in animation and illustration.
                  </p>
                  <p class="self-intro">
                      I really enjoy the problem solving challenges web brings both in UX and in software architecture. I also love learning new workflows and technologies.
                      However, I still dabble in animation and illustration and hope to marry these interests with web in the future.
                  </p>
                  <p class="self-intro">
                      Send me a message; <br>I'd love to hear from you.
                  </p>
                  <hr class="header"/>
                  ${contactForm(state, emit)}
              </div>`
}
