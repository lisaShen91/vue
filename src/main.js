import Vue from 'vue'
import App from './App.vue'
import MyApp from './components/library.vue'
//var App = require('./App.vue');

//new Vue({
//  el: '#app',
//  render: h => h(App)   //组件需注册 才可以在html中使用
//});
new Vue({
  el: '#app',
  render: h => h(MyApp)
});
