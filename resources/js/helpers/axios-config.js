import axios from 'axios'
import { master } from './master'
import _ from 'lodash'
import Cookies from 'js-cookie'

let token = localStorage.getItem(master.getAuthTokenName())

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Accept-Language'] = Cookies.get(master.getLangCookieName())
if (!_.isEmpty(token)) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
