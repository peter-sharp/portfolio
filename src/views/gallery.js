import html from 'choo/html'

export default function galleryView(state, events) {
  return html`<ul class="gallery" masonry>
                  <!-- TODO, look into a cleaner way of getting the filtered list -->
                  <li ng-repeat="item in ( filteredMedia = ( media | filter: search | orderBy: orderProp ) )" class="media masonry-brick">
                      <a href="/media/{{item.id}}" ng-click="saveFiltered($event); log($event,'viewed', item.id)" action-logger >
                          <img src="{{item.thumbnail}}" alt="{{item.title}}"/>
                          <h3>{{item.title}}</h3>
                      </a>
                  </li>
              </ul>`
}
