<template>
    <div class="box">
        <el-form label-position="left"  label-width="80px">
            <el-form-item>
              <p class="title">注册REGISTER</p>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="userInfos.username" 
                 class="bgNone" ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="userInfos.email"  class="bgNone"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userInfos.password"  class="bgNone"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="userInfos.passwordConfirm"  class="bgNone"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <Verify ref="Verify"  :type="type" :arith="num" @success="success"></Verify>
            </el-form-item>
            <el-form-item>
                <el-checkbox>
                    我已阅读并同意
                    <router-link to="">{{protocal}}</router-link>
                </el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button  class="registerBtn"   type="warning"  @click="register" size="medium">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
   import Verify from "../../component/verify/Verify";
     
    export default{
        name:'Register',
        components:{
            Verify,
        },
        data(){
            return{
                userInfos:{
                    username:'',
                    email:'',
                    password:'',
                    passwordConfirm:'',
                    validateCode:''
                },
                num:0,
                label:true,
                type:1,
                protocal:"<<yvvy用户注册协议>>",
                verifyInstance:null,
            }
        },
        methods:{
            register(){
               this.$refs.Verify.checkCode();
            },
            success(obj){
             console.log(obj);
            }
        },
        mounted(){
        this.type=Array.from([1,2,3])[~~(Math.random()*3)];
        }
    }
</script>
<style lang="scss" scoped>
     div.box{ 
          display:flex;
          justify-content: center;
          align-items: center;
          width:100vw;
          height:100vh;
     }

     button.registerBtn{
           width:250px;
       }
</style>
<style>
       @import "../../../global.scss";
    
       div.validateCode{
          width:125px !important;
       }
       p.title{
           font-size: 14px;
           color:#fff;
           margin: 0px 0px;
       }
 
</style>
