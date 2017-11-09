import html from 'choo/html'

export default function mediaView(state, events) {
  return html`<div>
                <h2>{{item.title}}</h2>
                <div class="image-viewer">
                  <div class="page-turner prev" >
                    <a ui-sref="current_page({id: page.prev})" id="prev"  animate class="" ng-class="(animating == 'prev') ? 'animate' : ''">
                      <span class="icon icon-large icon-turn-prev"></span>
                    </a>
                  </div>
                  <div class="media-frame" >
                    <img ng-style="{ width: width, height: height }" src="{{item.image.src}}" best-fit data-width="{{ item.image.width }}" data-height="{{ item.image.height }}" ></img>
                  </div>
                  <div class="page-turner next" >
                    <a ui-sref="current_page({id: page.next})" id="next"  animate class="" ng-class="(animating == 'next') ? 'animate' : ''">
                      <span class="icon icon-large icon-turn-next"></span>
                    </a>
                  </div>
                  </div>
                  <div class="image-info">
                    <p class="caption">{{item.content.full}}</p>
                    <div class="tags">
                      <h3>tags</h3>
                      <ul>
                      <li ng-repeat="tag in item.tags">{{tag}}</li>
                      </ul>
                    </div>
                  </div>
              </div>`
}
