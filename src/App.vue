<template>
    <div class="a-c" id="app">
        <div @click="del" v-html="c"></div>
        <button @click="loginOn" :class='{col: "isAdd"}'>登录</button>
    </div>
</template>

<script type="es6">
    //import Hello from './components/hello.vue'
    import TodoList from './components/todo-list.vue'
    //module.export={}
    export default {
        name: 'app',

        data () {
            return {
                msg: 'Welcome to Your Vue.js App1234',
                a: {
                    b: 1
                },
                c: '<p>sdfsg</p>',
                isAdd: true
            }
        },

        methods: {
            loginOn () {
                window.location.href = '/about';
            },
            del () {
                this.$destroy();
            }
        },

        beforeCreate () {
            console.log('beforeCreate');
        },

        created () {
            console.log('created');
        },

        beforeMount () {
            console.log('beforeMount');
        },

        mounted () {
            console.log('mounted');
        },

        beforeUpdate () {
            console.log('beforeUpdate list.count');
        },

        updated () {
            console.log('updated list.count');
        },

        beforeDestroy () {
            console.log('beforeDestroyed');
        },

        destroyed () {
            console.log('destroyed');
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    .col {
        color: red;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .a-c {
        text-align: center;
    }
</style>
