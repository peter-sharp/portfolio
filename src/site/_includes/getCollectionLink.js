
module.exports = function getCollectionLink(uri) {
    const [, collection,] = uri.split('/')
    const title = "gallery" == collection ? "home" : collection;
    return {
        url: `/${'gallery' == collection ? '' : collection}`,
        title
    }
}