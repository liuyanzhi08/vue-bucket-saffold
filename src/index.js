import Vue from 'vue'
import app from './component/app.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()
sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  components: {app}
})
