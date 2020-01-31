import _ from 'lodash'
import { master } from '../../../helpers/master'

export default {
  isAuth (state) {
    let auth = _.get(state, ['is_auth'], false)
    if (auth) {
      return auth
    }
    let authToken = localStorage.getItem(master.getAuthTokenName())
    if (!_.isEmpty(authToken)) {
      return true
    }
    return _.get(state, ['is_auth'], false)
  },
  username (state) {
    let username = _.get(state, ['user_data', 'username'])
    let userData = localStorage.getItem(master.getStorageUserDataName())
    if (!username && !_.isEmpty(userData)) {
      return _.get(userData, ['username'], '')
    }
    return username
  },
  email (state) {
    let email = _.get(state, ['user_data', 'email'])
    let userData = localStorage.getItem(master.getStorageUserDataName())
    if (!email && !_.isEmpty(userData)) {
      return _.get(userData, ['email'], '')
    }
    return email
  },
  userData (state) {
    let data = _.get(state, ['user_data', 'email'])
    let userData = localStorage.getItem(master.getStorageUserDataName())
    if (!data && !_.isEmpty(userData)) {
      return userData || {}
    }
    return data
  }
}
