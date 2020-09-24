<template>
      <div class="_box" @click="emitState">
           <span v-for="[key,value] in infos" :key="key">
                 <router-link to='/contactUs' class="font"
                   :data-state="key"
                 >{{value}}</router-link>
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
         },
         methods:{
             emitState(e){
               let tag=e.target.tagName.toLowerCase();
               if(tag=="a"){
                  this.$EventBus.emit("sideState",e.srcElement.dataset.state);
               }
             }
         }
     }
</script>
<style lang="scss" type="text/css" scoped>
         div._box{
             display: flex;
             height:60px;
             width:100%;
             background:transparent;
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