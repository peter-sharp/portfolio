import serviceCreator from 'serviceCreator';
const mediaArticleService = serviceCreator({
  list(method, params, data, location) {
    if('get' == method) {
      return fetch('https://raw.githubusercontent.com/peter-sharp/portfolio/master/media/media.json')
      .then(res => res.json())
    }
  }
});

export default mediaArticleService
