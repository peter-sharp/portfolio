module.exports = function isActive(url, page) {
    const [, urlCollection] = url.split('/');
    const [, pageCollection] = page.url.split("/");
    return (
        url == page.url ||
        urlCollection == pageCollection ||
        (!urlCollection && pageCollection == "gallery")
    );
}