import html from 'choo/html'

export default function galleryView(state, events) {
  return html`<ul class="gallery" masonry>
                  <!-- TODO, look into a cleaner way of getting the filtered list -->
                  <!--  ng-repeat="item in ( filteredMedia = ( media | filter: search | orderBy: orderProp ) )"-->
                  ${state.mediaArticles.map((article) => html`
                  <li class="media masonry-brick">
                      <a href="/media/${article.id}" ng-click="saveFiltered($event); log($event,'viewed', article.id)" action-logger >
                          <img src="${article.thumbnail}" alt="${article.title}"/>
                          <h3>${article.title}</h3>
                      </a>`
                    )}
                  </li>
              </ul>`
}
