<template>
      <div class="_box">
           <span v-for="[key,value] in infos" :key="key">
                 <router-link :to='key' class="font">{{value}}</router-link>
           </span>
      </div>
</template>>
<script>
     export default{
         name:'Bottom',
         data(){
             return{
                infos:[["aboutUs","关于我们"],["contactUs","联系我们"],
             ["news","新闻公告"],["dstInstallation","配送安装"],["returnPolicy","退换货政策"],
             ["maintenance","维修与保养"]]
             }
         }
     }
</script>
<style lang="scss" type="text/css" scoped>
         div._box{
             display: flex;
             height:60px;
             width:100%;
             background:#1b1b1b;
             justify-content: center;
             align-items: center;
             margin:0px 0px;
             padding:0px 0px;
             span{
                 display: inline-block;
                 margin-left:20px;
                 .font{
                    color:#ccc;
                   font-size:14px;
                   text-decoration:none;
                   white-space: nowrap;
                 }
             }
         }
</style>