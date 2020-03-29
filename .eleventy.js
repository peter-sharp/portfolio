module.exports = function eleventyConfig(config) {

    config.addPassthroughCopy('src/site/uploads')
    config.addPassthroughCopy('src/site/style.css')
    config.setBrowserSyncConfig({
        https: true
    });
    config.addCollection('mainMenu', function mainMenuCollection(collection) {
        return collection.getFilteredByTag('page').sort(function(a, b) {
            return b.data.menuIndex - a.data.menuIndex
        })
    })
    return {
        dir: {
            input: 'src/site'
        }
    }
}