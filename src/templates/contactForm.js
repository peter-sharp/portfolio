import html from 'choo/html'

export default function contactForm(state, emit) {
  return html`<form name="contactForm" class="contact" ng-submit="sendMessage($event)" >
                  <div class="grid">
                      <div class="input-group">
                          <label for="">name<span class="required">*</span></label>
                          <input type="text"  name="name" ng-model="message.name" required />
                          <!--cf-error-message form="contactForm" input-name="contactForm.name" message="'Tell me your name.'"/-->
                      </div>
                      <div class="input-group">
                          <label for="">email<span class="required">*</span></label>
                          <input type="email"  name="email" ng-model="message.email" required />
                          <!--cf-error-message form="contactForm" input-name="contactForm.email" message="'Tell me your email address.'"/-->
                      </div>
                  </div>
                  <div class="input-group">
                      <label for="">message<span class="required">*</span></label>
                      <textarea name="body"  id="" rows="10" ng-model="message.body" required ></textarea>
                      <!--cf-error-message form="contactForm" input-name="contactForm.body" message="'Don\'t forget the message!'"/-->
                  </div>
                  <div class="input-group">
                      <span><span class="required">*</span> all fields required.</span>
                      <input type="submit" value="${state.form.submitButtonText}" class="btn-primary"/>
                  </div>

              </form>`
}
