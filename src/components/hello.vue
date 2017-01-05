<template>
    <div class="hello">
        <h1>{{ message }} {{ a }}</h1>
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
            message: "hello  world!",
            a: '123'
        }
    }
}

</script>
<style>
.hello {
    color: red
}
</style>

