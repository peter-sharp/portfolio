import serviceCreator from 'serviceCreator';
const pageService = serviceCreator({
  list(method, params, data, location) {
    if('get' == method) {
      return Promise.resolve([])
    }
  }
});

export default pageService
