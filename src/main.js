import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import VueLazyLoad from 'vue-lazyload'
import VueLazyload from 'vue-lazyload'

Vue.use(MintUI)

Vue.use(VueLazyload, {
  loading: require('./assets/images/common/zhanwei.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')