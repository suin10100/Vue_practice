import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './Ninja.vue'

// // 전역 사용
// Vue.component("ninjas", Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})
