const imageGallery = require('./src/site/_includes/components/imageGallery.js');
const outdent = require('outdent');
const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function eleventyConfig(config) {
    config.addPlugin(svgContents);
    
    config.addPassthroughCopy('src/site/uploads')
    config.addPassthroughCopy('src/site/style.css')
    config.addPassthroughCopy('src/site/usa-2020.css')
    config.setBrowserSyncConfig({
        https: true
    });

    function stringToImageData(image) {
        const [url, title] = image.split(',')
        return {
            url: url && url.trim(),
            title: title && title.trim()
        };
    }
    config.addShortcode('imageGallery', function imageGalleryShortcode(...images) {
        let str = imageGallery(images.map(stringToImageData)).toString();
        if(str) str = str.trim();
        return outdent.string(str);
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
