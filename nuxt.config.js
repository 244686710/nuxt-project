module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'web-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ssr vue' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'axios',
      'element-ui'
    ]
  },
  modules: [
    // '@nuxtjs/proxy'
  ],
  proxy: {
    '/api/': {
      target: 'http://api.178by.com/',
      pathRewrite: { '^/api/': '' }
    }
  },
  generate: {
    routes: [
      '/posts/1'
    ]
  },
  plugins: [
    // 引入elementUI组件
    '~plugins/ElementUI'
  ],
  css: [
    // 引入elementUI样式
    'element-ui/lib/theme-chalk/index.css'
  ]
}
