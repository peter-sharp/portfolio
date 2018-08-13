import serviceCreator from 'serviceCreator';
const mediaArticleService = serviceCreator({
  list(method, params, data, location) {
    if('get' == method) {
      return Promise.resolve([])
    }
  }
});

export default mediaArticleService
