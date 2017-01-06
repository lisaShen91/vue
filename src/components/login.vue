<template>
    <div class="login-wrap">
        <ul>
            <li v-for="(item, type, index) in loginStyle.account" v-if="loginType == 'account'">
                <label :for="item.value">{{ item.text }}:</label>
                <input :type="item.type" :name="item.value" :placeholder="item.placeholder" />
            </li>
        </ul>
        <ul>
            <li v-for="(item, type) in loginStyle.email" v-if="loginType == 'email'">
                <label :for="item.value">{{ item.text }}:</label>
                <input :type="item.type" :name="item.value" :placeholder="item.placeholder" />
            </li>
        </ul>
        <!--<p>
            <label> {{ loginType == 'account' ? "Username:" : "Email:" }} </label>
            <input type="text" v-model="message1">
        </p>
        <p>
            <label>Password:</label>
            <input type="password" v-model="message2">
        </p>-->
        <div>
            <button class="btn" @click="login"> {{ loginType  == 'account' ? "用户名登录" : "邮箱登录" }}</button>
            <button class="btn" @click="toggleLoginType">切换登录方式</button>
        </div>
        <div>
            user message:
            <p>账户：{{ message1 }}</p>
            <p>密码： {{ message2 }}</p>
        </div>
    </div>
</template>

<script type="es6">
    var loginStyle = {
        email: [
            {
                value: 'email',
                text: '邮箱',
                type: 'text',
                placeholder: 'Enter your user email'
            },
            {
                value: 'password',
                text: '密码',
                type: 'password',
                placeholder: 'Enter your user password'
            }
        ],
        account: [
            {
                value: 'username',
                text: '用户名',
                type: 'text',
                placeholder: 'Enter your user username'
            },
            {
                value: 'password',
                text: '密码',
                type: 'password',
                placeholder: 'Enter your user password'
            }
        ]
    };
    export default {
        data () {
            return {
                loginType: 'account',
                loginStyle: loginStyle,
                message1: '',
                message2: ''
            }
        },
        methods: {
            toggleLoginType () {
                this.loginType = this.loginType == 'account' ? 'email' : 'account';
                console.log(this.loginType);
                this.$nextTick(function(){
                    console.log(this.loginType); // => '更新完成'
                })
            },
            login () {
                this.message1 = this.loginType;
            }
        }
    }
</script>

<style>

    .login-wrap {
        text-align: center;
        font-size: 14px;
    }

    ul {
        list-style: none;
    }

    ul li {
        margin: 10px;
    }

    input {
        padding: 10px;
        /*border-radius: 5px;*/
        border: 1px solid #ccc;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    .btn {
        color: #fff;
        padding: 10px;
        border: 0;
        border-radius: 5px;
        background-color: cornflowerblue;
    }

    .btn:hover {
        cursor: pointer;
        /*font-weight: 800;*/
        background-color: #2196f3;
    }
</style>