import html from 'choo/html'

export default function search(state, emit){
  return html`
  <div class="select" >
      <input type="text" name="categories" class="search-list icon-drop-down" ng-model="search" ng-click="activateMenu($event)" action-logger ng-blur="log($event,'search', search)" placeholder="search for"/>
      <ul class="options" ng-show="menuActive">
        <li  ng-click="selectOption()">all</li>
        ${state.mediaCategories.map( cat => html`<li ng-click="selectOption(option)">${cat}</li>`)}
      </ul>
      <!-- <div ng-show="menuActive">Menu</div> -->
  </div>`
}
