import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      // persist the authorization header for axios request
      axios.defaults.headers.common['Authorization'] = `Bearer ${ userData.token }`
    },
    /* CLEAR_USER_DATA (state) {
      state.user = null
      localStorage.removeItem('user')
      axios.defaults.headers.common['Authorization'] = null
    } */
    // hard refresh on page logout user - scalable solution
    CLEAR_USER_DATA () {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post('//localhost:3000/register', credentials)
        .then(({ data }) => {
          console.log('user data is:', data)
          // design pattern to commit after successful action
          commit('SET_USER_DATA', data)
        })
    },
    login ({ commit }, credentials) {
      return axios
        .post('//localhost:3000/login', credentials)
        .then(({ data }) => {
          console.log('user data is:', data)
          // design pattern to commit after successful action
          commit('SET_USER_DATA', data)
        })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  // getters with helper function to check if user logged in?
  getters: {
    loggedIn (state) {
      // double !!return truthy or falsy value
      return !!state.user
    }
  }
})
