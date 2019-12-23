
module.exports = function getCollectionLink(uri) {
    const [, collection,] = uri.split('/')
    const title = collection;
    return {
        url: `/${collection}`,
        title
    }
}