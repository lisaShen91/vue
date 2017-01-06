import Vue from 'vue'
//import App from './App.vue'
import Index from './index.vue'

/*Vue.component('my-component', {
  template: '<div>A custom component! outer</div>'
});

Vue.component('component2', {
  template: '<div>abnormal</div>'
});*/



new Vue({
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
});


