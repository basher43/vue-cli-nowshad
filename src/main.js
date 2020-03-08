import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
import VueRouter from "vue-router";
Vue.use(VueRouter)

import routes from './Routes/routes'

new Vue({
  router: new VueRouter({
    routes,
    mode:'history'
  }),
  render: h => h(App),
}).$mount('#app')
