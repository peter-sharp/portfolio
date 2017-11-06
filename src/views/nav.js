import html from 'choo/html'
export default function navView(state, events) {
  return html`
  <header>
      <nav class="menu-hide-anim" ng-class="{'menu-hidden': hidden}">
        <ul>
          <li ng-repeat="page in mainPages" ><a ui-sref="{{page.state}}" ui-sref-active="active" >{{page.state}}</a></li>

        </ul>
      </nav>
      <div class="menu-button" ng-click="openMenu()"></div>
  </header>`
}
