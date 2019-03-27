import Vue from 'vue'
import App from './App.vue'
import ReactiveSearch from "@appbaseio/reactivesearch-vue";

Vue.config.productionTip = false
Vue.use(ReactiveSearch)

new Vue({
  render: h => h(App),
}).$mount('#app')
