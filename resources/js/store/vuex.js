import Vuex from 'vuex'

import auth from './modules/auth'

const modules = {
  auth
}

export default new Vuex.Store({
  modules
})
