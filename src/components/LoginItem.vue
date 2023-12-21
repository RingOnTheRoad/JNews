<script lang="ts" setup>
    import { ref, reactive } from 'vue';
    import type { FormInstance, FormRules } from 'element-plus'
    import { useUserStore } from '../stores/user.js'
    import { loadSlim } from "tsparticles-slim";
    import logo from "@/assets/imgs/嘉闻logo.png"
    import jyu from "@/assets/imgs/jyu.png"
    import { particlesOption } from "@/assets/options/particlesOption.js"
    
    const ruleFormRef = ref<FormInstance>()

    const user = reactive({
        account: '',
        password: ''
    })
    const userStore = useUserStore()

    const accountRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/

    const options = particlesOption

    const particlesInit = async (engine: any) => {
    await loadSlim(engine);
    };

    const checkAccount = (rule: any, value: any, callback: any) => {
        if(!value) {
            return callback(new Error("请输入账号!"))
        }
        setTimeout(() => {
            if(!accountRegex.test(value)) {
                callback(new Error("账号必须是英文和数字的组合"))
            }
            if(String(value).length < 8){
                callback(new Error("账号长度必须大于8"))
            } else {
                callback()
            }
        }, 500)
    }

    const checkPassword = (rule: any, value: any, callback: any) => {
        if(!value) {
            return callback(new Error("请输入密码!"))
        }
        setTimeout(() => {
            if(!accountRegex.test(value)) {
                callback(new Error("密码必须是英文和数字的组合"))
            }
            if(String(value).length < 8){
                callback(new Error("账号长度必须大于8"))
            } else {
                callback()
            }
        }, 500)
    }

    const rules = reactive<FormRules<typeof user>>({
        account: [{validator: checkAccount,trigger: 'blur'}],
        password: [{validator: checkPassword,trigger: 'blur'}]
    })

    const loginSubmit = (formEl: FormInstance | undefined) => {
        capFlag.value = false
        loginFlag.value = false
        if(!formEl) return;
        formEl.validate((valid) => {
            if(valid) {
                if(userStore.flag > 0) {
                    const loginState = userStore.findUser(user)
                    if(loginState === true) {
                        userStore.decreaseFlag()
                    }
                    else {
                        userStore.loginBeTrueFlag()
                        loginFlag.value = userStore.loginFlag
                    }
                } else{
                    userStore.capBeTrueFlag()
                    capFlag.value = userStore.capFlag
                }
            }else {
                return false
            }
        })
    } 
    const registerSubmit = (formEl: FormInstance | undefined) => {
        capFlag.value = false
        if(!formEl) return;
        formEl.validate((valid) => {
            if(valid) {
                if(userStore.flag > 0) {
                    const registerState = userStore.findUser(user)
                    if(registerState === true) {
                        userStore.registerBeTrueFlag()
                        registerFlag.value = userStore.registerFlag
                        console.log(registerFlag.value)
                    } else {
                        userStore.addUser(user)
                        userStore.decreaseFlag()
                    }
                    
                }else {
                    userStore.capBeTrueFlag()
                    capFlag.value = userStore.capFlag
                }
            }else {
                return false
            }
        })
    }

    const onSuccess = (checkCode: any) => {
        userStore.increaseFlag()
    }
    var capFlag = ref(userStore.capFlag)
    var loginFlag = ref(userStore.loginFlag)
    var registerFlag = ref(userStore.registerFlag)
</script>



<template>
 <div class="mainLogin">

    <div class="loginPart">
        <el-form class="loginForm" :model="user" :rules="rules" ref="ruleFormRef" status-icon>
            <el-form-item label="账号" prop="account">
                <el-input v-model="user.account" placeholder="请输入账号" maxlength="12" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="user.password" placeholder="请输入密码" type="password" autocomplete="off" maxlength="16" clearable></el-input>
            </el-form-item>
            <el-button class="loginBtn" type="primary" @click="loginSubmit(ruleFormRef)">登录</el-button>
            <el-button class="registerBtn" type="danger" @click="registerSubmit(ruleFormRef)">注册</el-button>
        </el-form>

        <div class="mi-captchas">
            <mi-captcha class="mainCaptches"
            theme-color="#be6be0"
            bgColor=rgba(238,130,238,0.6)
            borderColor=rgba(105,105,105,0.2)
            :image="jyu"
            :logo="logo"
            @success="onSuccess" />
        </div>
    </div>

    <div class="particles">
        <vue-particles id="tsparticles" 
        :particlesInit="particlesInit" 
        :options="options" />
    </div>

    <div class="logoMsg">
        <h2 class="logoText">嘉闻用户登录</h2>
        <img class="logoImg" src="../assets/imgs/嘉闻logo.png">
    </div>
 </div>

 <div class="popUps">
    <el-alert title="验证码还没有验证!" type="error" center show-icon :closable="false" v-if=capFlag></el-alert>
    <el-alert title="账户不存在!" type="error" center show-icon :closable="false" v-if=loginFlag></el-alert>
    <el-alert title="用户名已存在!" type="error" center show-icon :closable="false" v-if=registerFlag></el-alert>
 </div>

</template>



<style scoped>
    .mainLogin{
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: fixed;
        display: flex;
        background: linear-gradient(
            135deg,
            hsl(243, 64%, 71%),
            hsl(190, 33%, 44%),
            hsl(250deg,80%,70%),
            hsl(320deg,80%,70%));
        background-size: 200% 200%;
        animation: myanimation 20s infinite;
        top: 0;
        left: 0;
        justify-content: space-around;
        align-items: center;
    }

    .loginPart{
        order: 1;
    }
    .loginForm{
        width: 400px;
        height: 220px;
        padding: 50px;
        background: rgba(255,204,255,.3);
        box-sizing: border-box;
        box-shadow: 0px 15px 25px rgba(0,0,0,.5);
        border-radius:15px;
    }
    .loginBtn{
        position: relative;
        bottom: 10px;
        width: 150px;
        height: 35px;
        box-shadow: 0px 0px 10px rgba(0,0,0,.2);
    }
    .registerBtn{
        top: 394px;
        position: absolute;
        width: 150px;
        height: 35px;
        box-shadow: 0px 0px 10px rgba(0,0,0,.2);
    }
    .logoMsg{
        order: 0;
    }
    .logoText{
        color: #fff;
        text-align:center;
        position: relative;
        left: -40%;
        bottom: -300px;
        font-size: 50px;
        font-weight: 700;
        text-decoration: underline;
        text-underline-offset: 0.2em;
        letter-spacing: 2px;
        text-shadow: 0 0 4px lightcyan;
    }
    .logoImg{
        position: relative;
        bottom: 100px;
        left: -40%;
    }
    img{
        height: 300px;
        width: 300px;
        position: absolute;
        top: 20%;
        left: 15%;
    }
    .mi-captchas{
        position: relative;
        top: 8px;
        width: 400px;
        height: 30px;
        padding: 30px;
        background: rgba(255,204,255,.3);
        box-sizing: border-box;
        box-shadow: 0px 15px 25px rgba(0,0,0,.5);
        border-radius:15px;
    }
    .mainCaptches{
        position: absolute;
        top: 8px;
        right: 38px;
    }
    .el-alert{
        position: absolute;
        top: 0%;
        left: 0%;
    }
    @keyframes myanimation{
        0%{
            background-position: 0% 0%;
        }
        50%{
            background-position: 100% 100%;
        }
        100%{
            background-position: 0% 0%;
        }
    }
</style>