
<script type="es6">
    import Vue from "vue"
    var vm = new Vue({
        el: '#example',
        data: {
            message: '123'
        }
    });
    vm.message = 'new message'; // 更改数据
    console.log(vm.$el.textContent === 'new message'); // false
    Vue.nextTick(function () {
        console.log(vm.$el.textContent === 'new message'); // true
    })
</script>