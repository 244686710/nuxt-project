module.exports = {
  "extends": "standard",
  "plugins": [
    // 此插件用来识别.html 和.vue文件中的js代码
    "html",
    // standard风格的依赖包
    "standard",
    "promise",
    "import"

  ],
  "parser": "babel-eslint",
  "rules": {
    "no-new": "off"
  }
}
