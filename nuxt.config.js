module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Your Grandma Lied',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'A graphic design studio', name: 'A graphic design studio', content: 'A graphic design studio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300'}
    ],
    modules: [
      // provide path to the file with resources
      ['nuxt-sass-resources-loader', './assets/main.scss']
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js' }
    ],
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/button.js', ssr: false },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'rgb(221, 209, 209)' },
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
    }
  }
}

