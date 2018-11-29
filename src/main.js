// 这是入口文件，也是webpack需要打包的文件入口
import Vue from 'vue'

import App from './App.vue'

var vm = new Vue({
  el: '#app',
  data: {

  },
  methods: {

  },
  render: (createElement) => {
    return createElement(App)
  }
})