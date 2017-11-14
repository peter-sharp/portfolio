import mediaArticleService from 'services/mediaArticles'

export default function mediaStore(state, events){
  var mediaArticlesAll = []

  state.mediaArticles = []

  mediaArticleService('list', 'get')
  .then(mediaArticles => {
    mediaArticlesAll = mediaArticles
    state.mediaArticles = mediaArticlesAll;
    events.emit(state.events.RENDER);
  })

}
