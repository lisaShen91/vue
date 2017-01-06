import Vue from 'vue'
import App from './App.vue'
import Index from './index.vue'
//import common from './css/common.css'

/*Vue.component('my-component', {
 template: '<div>A custom component! outer</div>'
 });

 Vue.component('component2', {
 template: '<div>abnormal</div>'
 });*/

Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
    props: ['title']
});

const NotFound = {template: '<p>Page not found</p>'};
const Home = App;
const About = Index ;
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
    render (h) {
        return h(this.ViewComponent)
    }
});


/*
 window.vm = new Vue({
 el: '#app',
 render: h => h(Index)
 });
 console.log(vm.$data);
 //console.log(vm.$data.msg == vm.msg);
 console.log(vm);*/


