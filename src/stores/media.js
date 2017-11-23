import mediaArticleService from 'services/mediaArticles'

export default function mediaStore(state, events){
  var mediaArticlesAll = []

  state.mediaArticles = []
  state.mediaArticlesById = {}


  state.mediaCategories = ['3D','illustration','web-design','animation']

  mediaArticleService('list', 'get')
  .then(mediaArticles => {
    mediaArticlesAll = mediaArticles
    state.mediaArticles = mediaArticlesAll;
    state.mediaArticlesById = mediaArticlesAll.reduce((acc, x) => (acc[x.id] = x), {})
    events.emit(state.events.RENDER);
  })

}
