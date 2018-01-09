const WordExpressPlugin = {
  install (Vue, options) {
    const {shortcodes, helpers} = options
    Vue.prototype.$parseContent = function (content) {
      return helpers.parseContent(content, shortcodes)
    }

    Vue.prototype.$getThumbnail = function (thumbnail, size) {
      return helpers.getThumbnail(thumbnail, size)
    }

    Vue.prototype.$formatDate = function (date) {
      return helpers.formatDate(date)
    }
  }
}

export default WordExpressPlugin
