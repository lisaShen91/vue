<template>
    <div id="app">
        <h1 class="color-red" v-bind:class="{'alignc': classA}">
            {{ message }}
        </h1>
        <!--<LoginModule></LoginModule>-->
        <Com></Com>
    </div>
</template>

<script type="es6">
    import LoginModule from "./components/login.vue"
    import Com from "./components/childComponent.vue"

    export default {
        data () {
            return {
                message: 'welcome to vue!',
                classA: true
            }
        },
        components: {
            LoginModule: LoginModule,
            Com: Com
        }
    }

</script>

<style>
    .alignc {
        text-align: center;
    }
    .color-red {
        color: red;
    }
</style>