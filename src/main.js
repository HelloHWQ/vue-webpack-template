// 这是入口文件，也是webpack需要打包的文件入口
import Vue from 'vue'

import App from './App.vue'

// 测试babel是否有效
class Person {
  static info = { name: 'hwq', age: 20 }
}
console.log(Person.info)

// 测试url-loader是否有效
import './index.css'

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