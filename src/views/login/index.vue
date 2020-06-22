<template>
    <div class="login-container">
        <div class="main-login">
            <div class="login-content">
                <div class="login-pic">
                    <div class="login-form">
                        温馨提示：未注册用户登录后即自动注册成功
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { verificationCodeCkeck, verificationCodeCreate, login } from '@/api/user'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    import { isCellPhone } from '@/utils/validate'
    export default {
        name: 'login',
        components: {
        },
        props:{
            
        },
        data() {
            return {
               
            }
        },
        computed: {
        },
        watch: {
        },
        created() {
        },
        mounted() {
            
        },
        destroyed() {

        },
        methods: {
            
        }
    }

</script>

<style lang="scss" scoped>
    .main-login {
        width: 100%;
        height: 500px;
        .login-pic {
            width: 1200px;
            position: relative;
            top: 0;
            left: 50%;
            margin-left: -600px;
            height: 500px;
        }
        .login-form {
            position: absolute;
            right: 0;
            top: 60px;
            width: 400px;
            height: 360px;
            background-color: var(--white);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 6px;
            padding: 0 40px;
            .title {
                width: 100%;
                height: 80px;
                line-height: 80px;
                font-size: 16px;
                color: #333;
                text-align: center;
                .title-selected {
                    width: 100%;
                    font-weight: bold;
                    color: #666666;
                }
            }
            .inp-sm {
                border: 0;
                width: 222px;
                float: left;
                overflow: hidden;
            }
            .getCode {
                display: block;
                float: right;
                font-size: 12px;
                width: 98px;
                height: 36px;
                line-height: 36px;
                color: var(--white);
                background-color: var(--orange);
                cursor: pointer;
                padding: 0 5px 0 5px;
                text-align: center;
            }
            .reset-button {
                display: block;
                float: right;
                font-size: 12px;
                width: 98px;
                height: 36px;
                line-height: 36px;
                color: var(--white);
                background-color: #dddddd;
                border: 1px #ddd solid;
                padding: 0 5px 0 5px;
                text-align: center;
            }
            .submit {
                width: 320px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                background-image: linear-gradient(135deg, #efc590 0%, #bb8d48 100%);
                border-radius: 100px;
                font-family: 'PingFangSC-Medium', 'Source Han Serif SC';
                font-size: 18px;
                color: var(--white);
                cursor: pointer;
            }
        }
        .tip {
            margin-top: 20px;
            font-size: 12px;
            text-align: center;
            color: #cccccc;
        }
    }
</style>
