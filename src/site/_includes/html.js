const html =  require('choo/html')

module.exports = function htmlProxy(...args) {
    return html.apply(this, args).toString();
}