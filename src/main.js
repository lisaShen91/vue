import Vue from 'vue'
import App from './App.vue'
import MyApp from './components/library.vue'
//var App = require('./App.vue');

//new Vue({
//  el: '#app',
//  render: h => h(App)   //�����ע�� �ſ�����html��ʹ��
//});
new Vue({
  el: '#app',
  render: h => h(MyApp)
});
