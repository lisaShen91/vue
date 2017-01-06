<template>
    <div id="app">
        <div class="container">
            <!--<my-component></my-component>-->
            <!--<a href="http://www.baidu.com" @click.prevent>goBD</a>-->
            <h1 class="header" v-if="showTitle">书籍管理 出现了</h1>
            <h1 class="header" v-if="!showTitle">隐藏了</h1>
            <table class="table table-bordered">
                <tr>
                    <td>书的名字</td>
                    <td>数的价格</td>
                    <td>书的数量</td>
                    <td>小计</td>
                    <td>操作</td>
                </tr>
                <!--<tr is="component2"></tr>-->
                <component2></component2>
                <tr v-for="(book, index) in books">
                    <td>{{ book.name }}</td>
                    <td>{{ book.price }}</td>
                    <td><input type="text" v-model="book.count"></td>
                    <td>{{ book.price * book.count }}</td>
                    <td><button class="btn btn-danger" @click="remove(book, index)">删除</button></td>
                </tr>
                <tr>
                    <td colspan="5">
                        总价格: {{ total }}
                    </td>
                </tr>
            </table>
            <div class="form-group">
                <label for="bookname" class="control-label">书名:</label>
                <input type="text" v-model="list.name" id="bookname" class="form-control">
            </div>
            <div class="form-group">
                <label for="bookprice" class="control-label">价格:</label>
                <input type="text" v-model="list.price" id="bookprice" class="form-control">
            </div>
            <div class="form-group">
                <label for="bookcount" class="control-label">数量:</label>
                <input type="text" v-model="list.count" id="bookcount" class="form-control">
            </div>
            <button class="btn btn-primary" @click="add">添加</button>
        </div>
        <!--<ToDo></ToDo>-->
    </div>
</template>

<script type="es6">
    import ToDo from './todo-list.vue'
    import $ from 'jquery'
//var Vue = require('vue');


var books = [
    {name: 'nodeJs',price: 30, count: 1},
    {name: 'angularJs', price: 20, count: 2},
    {name: 'vueJs', price: 40, count: 2}
];

export default {
   /* beforeCreate () {
        var aa = document.getElementsByClassName('header');
        console.log('beforeCreate', aa, $);
    },*/

    data () {
        return {
            books: books,
            list: {
                name: '',
                price: '',
                count: ''
            },
            btn: '',
            showTitle: true
        }
    },

    methods: {
        add() {
            this.books.push(this.list);
            this.$destroy();
            this.list = {
                name: '',
                price: '',
                count: ''
            }
        },
        remove(book, index) {
            this.books.splice(index, 1);
        }
    },

    created () {
        var aa = document.getElementsByClassName('header');

        console.log('created', aa);
    },

    beforeMount () {
        console.log('beforeMount');
    },

    mounted () {
        console.log('mounted list.count', this.list.count);
    },

    beforeUpdate () {
        console.log('beforeUpdate list.count', this.list.count);
    },

    updated () {
        console.log('updated list.count', this.list.count);
    },

    computed: {
        total: function total () {
            var sum = 0;
            this.books.forEach(function(a) {
                sum += a.price * a.count;
            });
            return sum;
        }
    },
    components: {
        ToDo: ToDo,
        'my-component':  {
            template: '<div>A custom component! inner</div>'
        }
    },
    beforeDestroyed () {
        console.log('beforeDestroyed');
    },

    destroyed () {
    }
}
</script>

<style>
.container {
    border-top: 1px dashed #ccc;
    padding: 10px;
    margin: 20px;
    text-align: left;
}
.header {
    text-align: center;
}
.table {
    width: 100%
}
.table-bordered td{
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.table-bordered {
    border: 1px solid #ccc;
}
.form-group {
    width: 100%;
    text-align: left;
    margin-top: 20px;
}
.form-group input {
    display: block;
    width: 10%;
    margin: 10px 5px;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
}
.btn {
    color: #fff;
    background: #2196f3;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: 800;
}
.btn-primary {
    background: #2196f3;
}
.btn-danger {
    background: red;
}
</style>