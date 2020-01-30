import Vue from 'vue'
import VueI18n from 'vue-i18n'
import es from './locale/es/es'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es
  }
})

export default i18n
