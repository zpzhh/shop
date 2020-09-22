<template>
    <div class="box">
        <el-form  label-position="left
        "  label-width="80px"   ref="loginForm">
            <el-form-item  label="用户名">
               <el-input class="bgNone" v-model="userInfos.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input class="bgNone" v-model="userInfos.password"></el-input>
            </el-form-item>
            <el-form-item>
               <div class="box_pwd">
                <el-checkbox v-model="checked" class="checkPwd">记住密码</el-checkbox>
                <router-link to="/passwordChange" class="link">忘记密码?</router-link>
               </div>
            </el-form-item>
            <el-form-item>
                <el-button type="warning" @click="login" class="loginBtn">登录</el-button>
            </el-form-item>
        </el-form>
     
    </div>
</template>
 <script>
     import $ from "jquery";

      export default{
          name:'login',
          data(){
              return{
                   userInfos:{
                       password:'',
                       username:''
                   },
                   checked:false,
              }
          },
          methods:{
              login(){
                console.log(this.userInfos.username,
                this.userInfos.password,
                this.checked)
              }
          },
      }
 </script>
 <style lang="scss" scoped>
     div.box{
          display: flex;
          justify-content: center;
          align-items: center;
          width:100vw;
          height:100vh;
     }
     div.box_pwd{
         width:250px;
         height:32px;
         position:relative;
         .checkPwd{
             position:absolute;
             left:0px;
         }
         .link{
             position:absolute;
             right:0px;
         }
     }
     button.loginBtn{
             width:250px;
         }
 </style>
 <style>
         @import "../../../global.scss";
      
 </style>
