import Vue from 'vue'
//import App from './App.vue'
import Index from './index.vue'

/*Vue.component('my-component', {
  template: '<div>A custom component! outer</div>'
});

Vue.component('component2', {
  template: '<div>abnormal</div>'
});*/

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
  '/': Home,
  '/about': About
};

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
});

/*new Vue({
  el: '#app',
  render: h => h(Index),
  //created: function () {alert('实例创建完成');},
  //beforeCreate: function () {alert('开始编译前')},
  compiled: function() {
    alert('编译完成')
  },
  ready: function() {
    alert('准备好了')
  },
  beforeDestroy: function() {
    alert('准备销毁')
  },
  destroyed: function() {
    alert("销毁")
  }
});*/


