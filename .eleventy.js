module.exports = function eleventyConfig(config) {

    config.addPassthroughCopy('src/site/uploads')
    config.addPassthroughCopy('src/site/style.css')
    config.setBrowserSyncConfig({
        https: true
    });
    return {
        dir: {
            input: 'src/site'
        }
    }
}