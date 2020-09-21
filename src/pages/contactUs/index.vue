<template>
    <div class="box">
       <ul class="sideBar" @click="toggle">
           <li v-for="item in lists" :key="item.label" 
            :data-label="item.label"
             :class="{foucs:item.label==curLabel}"
            >
               {{item.title}}
           </li>
       </ul>
       <div class="display">
          <component :is="curComponent"></component>
       </div>
    </div>
</template>
<script>
    import aboutUs from "../../layouts/aboutUs.vue";
    import $ from 'jquery';


     const contactUs={
         name:'contactUs',
         template:"<div><h1 class='little_color'>联系我们</h1></div>"
     }
     const news={
         name:'news',
         template:"<div><h1 class='little_color'>新闻公告</h1></div>"
     }
     const dstInstallation={
         name:'dstInstallation',
         template:"<div><h1 class='little_color'>配送安全</h1></div>"
     }

     const returnPolicy={
         name:'returnPolicy',
         template:"<div><h1>退换货政策</h1></div>"
     }

     const maintenance={
         name:'maintenance',
         template:"<div><h1>维修与保养</h1></div>"
     }

    export default{
        name:'contactus',
        components:{
          aboutUs,
          contactUs,
          news,
          dstInstallation,
          returnPolicy,
           maintenance
        },
        mounted(){
         this.$EventBus.on('sideState',(state)=>{
              this.curLabel=state;
              this.curComponent=state;
         })
        },
        methods:{
          toggle(e){
              let tag=e.target.tagName.toLowerCase();
              if(tag=="li"){
                  let label=e.srcElement.dataset.label;
                   this.curLabel=label;
                  this.lists.forEach(element => {
                       if(element.title==$.trim(e.target.textContent)){
                           this.curComponent=element.label;
                       }
                           return;
                  });
              }
          }
        },
        data(){
            return{
              lists:[{title:'关于我们',label:'aboutUs'},{title:'联系我们',label:"contactUs"}
            ,{title:'新闻公告',label:'news'},{title:'配送安全',label:'dstInstallation'}
        ,{title:'退换货政策',label:"returnPolicy"},{title:'维修与保养',label:'maintenance'}],
        curComponent:"aboutUs",
        curLabel:'aboutUs',
            }
        }
    }
</script>
<style lang="scss" scoped>
    ul.sideBar{
        list-style: none;
        text-align: center;
        width:20%;
        li{
            color:#fff;
            padding-bottom:20px;
        }
        li:hover{
            color:#ff651c;
            cursor:pointer;
        }
        .foucs{
            color:#ff651c;
        }
    }
    div.box{
        display:flex;
        justify-content: flex-start;
        padding-top:120px;
        min-height:100vh;
        background-color: #000;
    }
</style>