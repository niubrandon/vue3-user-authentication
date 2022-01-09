import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './vuex/store.js'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    // pre-check localstorage and set state and ensure user are not logout after hard refresh
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userData)
      this.$store.commit('SET_USER_DATA', userData)
    }
    // security feature to detect fake key in localstorage
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.reponse.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
