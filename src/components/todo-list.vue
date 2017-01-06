<template>
    <div class="todo-list">
        <ul>
            <li v-for="(todo, index) in todos">
                <h1 v-bind:title="todo.text" @click="timeToDo(todo.text)">{{ index }} - {{ todo.value }} - {{ todo.text }}</h1>
            </li>
            <li is="component2"></li>
            <!--<component2></component2>-->
        </ul>
        <my-component></my-component>
    </div>
</template>

<script type="es6">

//module.exports = {
    //data: function() {
      //  return {
      //      message: '123'
  //      }
 //   }
//}
//new vue({
//})
export default {
    data () {
        return {
            classA: true,
            todos: [

                {
                    text: "吃饭",
                    value: 1
                },
                {
                    text: "看电影",
                    value: 2
                },
                {
                    text: "看书",
                    value: 3
                }
            ]
        }
    },
    methods: {
        timeToDo (val, e) {
            alert(val);
        }
    }
}

</script>
<style>
.color-red {
    color: red;
}
.todo-list {
    width: 300px;
    /* border: 1px solid #ccc; */
    float: left;
    text-align: left;
}
.todo-list>ul {
    list-style: normal;
}
.todo-list li {
    padding: 3px 4px;
    margin: 3px;
    display: block;
    background-color: #21cf8f;
    border-radius: 10px;
}
.todo-list li>h1 {
    margin: 3px;
}

</style>