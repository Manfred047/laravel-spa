import Vue from 'vue'

/**
 * Vue JS Directives
 */
// import './directives/directives'

/**
 * Router, Vuex and i18n
 */
import router from './routes/router'
import store from './store/vuex'
import i18n from './i18n/i18n'

/**
 * Vuetify
 */
import vuetify from './plugins/vuetify'

/**
 * Master App
 */
import App from './pages/App'

const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
})

export { app }
