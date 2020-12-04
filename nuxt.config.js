export default {
  mode: 'universal',
  router: {
    base: '/static/jeans-holidays/'
  //  base: '/static/preview/' // ## onsite test
  // ## & set head:{base:{href:"{{router.base}}"}}
  },
  /*
  ** Headers of the page
  */
  head: {
    base: {
      href: "{{ router.base }}"
     },
    //title: process.env.npm_package_name || '',
    titleTemplate: '%s - Jean\'s Holidays | 休日のひと時を彩る素敵なワインを皆様に。 | ジーンズ・ホリデーズ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '休日のひとときを彩る素敵なワインを皆様に。　ジーン長尾（元FM802のパーソナリティー）が厳選したニュージーランドワインを、あなたの2019年のホリデーシーズンにあわせて提案する企画が、FM802、FM COCOLOの協力のもと実現しました！' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Jean\'s Holidays | 休日のひと時を彩る素敵なワインを皆様に。 | ジーンズ・ホリデーズ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://craftwinepark.com/static/jeans-holidays/' },
      { hid: 'og:title', property: 'og:title', content: 'Jean\'s Holidays | 休日のひと時を彩る素敵なワインを皆様に。 | ジーンズ・ホリデーズ' },
      { hid: 'og:description', property: 'og:description', content: '休日のひとときを彩る素敵なワインを皆様に。　ジーン長尾（元FM802のパーソナリティー）が厳選したニュージーランドワインを、あなたの2019年のホリデーシーズンにあわせて提案する企画が、FM802、FM COCOLOの協力のもと実現しました！' },
      { hid: 'og:image', property: 'og:image', content: 'http://craftwinepark.com/static/jeans-holidays/images/logo_ogp.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css'}
    ],
    script: [
      {
        innerHTML: `(function(d) { var config = { kitId: 'pqc2xed', scriptTimeout: 3000, async: true }, h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s) })(document);`
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-scrollto',
    '~/plugins/scroll.js',
    '~/plugins/vov.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
    'nuxt-fontawesome'
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-128976424-1'
    }]
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
