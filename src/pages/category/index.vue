<template>
   <div class="box">
       <div class="list"  @click="focus">
           <ul v-for="(items,idx1) in tabItems">
                 <li v-for="(item,idx2) in items" >
                    <router-link :to="item.path"  :data-position="`${idx1}-${idx2}`" :class="[link,navVal==item.value&&col==idx1?orange:white]" v-if="item.value.length==2">
                {{item.value[0]}}<span class="two_font"></span>{{item.value[1]}}
                    </router-link>
                    <router-link :to="item.path" :data-position="`${idx1}-${idx2}`"  :class="[link,navVal==item.value&&col==idx1?orange:white]" v-else-if="item.value.length==3">
                        {{item.value[0]}}<span class="three_font">{{item.value[1]}}</span>{{item.value[2]}}
                    </router-link>
                    <router-link :to="item.path" :data-position="`${idx1}-${idx2}`" :class="[link,navVal==item.value&&col==idx1?orange:white]" v-else>
                        {{item.value}}
                    </router-link>
                 </li>
           </ul>
        </div>
       <div class="display">
           <router-view></router-view>
       </div>
   </div>
</template>
<script>
    import $ from "jquery";
    export default{
       name:'category',
        data(){
            return{
                tabItems:{
              chaoKuFurniture:[{path:'/category/chaoKuFurniture',value:"潮酷家具"},{path:'/category/chaoKuFurniture',value:"实木"},{path:'/category/chaokuFurniture',value:"沙发"},{path:'/category/chaoKuFurniture',value:"装饰家具"}],
              hardDecoration:[{path:'/category/hardDecoration',value:"硬装饰品"},{path:'/category/chaoKuFurniture',value:"桌面摆饰"},{path:'/category/chaoKuFurniture',value:"灯饰"},{path:'/category/chaoKuFurniture',value:"装饰植物"},{path:'/category/chaoKuFurniture',value:"装饰画"},{path:'/category/chaoKuFurniture',value:"墙面挂件"},{path:'/category/chaoKuFurniture',value:"装饰镜"}],
              softDecoration:[{path:"/category/softDecoration",value:"软装饰品"},{path:"/category/softDecoration",value:"地毯"},{path:"/category/softDecoration",value:"装饰枕"},{path:"/category/softDecoration",value:"桌面摆饰"}],
              homeWear:[{path:"/category/homeWear",value:"家居用品"},{path:"/category/homeWear",value:"餐饮用具"},{path:"/category/homeWear",value:"生活配饰"}],
            },
            link:"link",
            white:"white",
            orange:'orange',
            navVal:'',
            col:'',
        }
    },
     methods:{
          focus(e){  
           let tag=e.target.tagName.toLowerCase();
           if(tag=="a"){
           $("div.list>ul>li>a").each(function(idx,el){
                 $(el).addClass("white").removeClass("orange");
              
               })
               $(e.target).removeClass("white").addClass("orange")
              let col=e.srcElement.dataset.position.split("-")[0];
            //   let target=this.match(this.tabItems,$.trim(e.target.textContent));
              this.$EventBus.emit("jump",this.tabItems[col][0].value);
           };
        },
        match(obj,col){
            return obj[col][0].value;
        }
     },
     mounted(){
       let ref={
           "潮酷家具":"chaoKuFurniture",
           "硬装饰品":'hardDecoration',
           "软装饰品":"softDecoration",
           "家居用品":"homeWear",
       }
        this.$EventBus.on("curItem",(text)=>{   
              this.navVal=$.trim(text);
              console.log(ref[text]);
              this.col=ref[text];
         })
         this.$EventBus.on("topToside",(text)=>{
              this.col=text;
            this.$EventBus.emit("jump",this.match(this.tabItems,text));
         })
     }
    }
</script>
<style lang="scss" type="text/css" scoped>
         div.box{
             display:flex;
             justify-content: flex-start;
             padding:75px 80px;
             height:100%;
             width:100%;
             margin:0px 0px;
             background:rgb(77, 65, 65);
             div.list{
                 margin-top:0px;
                 width:150px;
                 min-height:200px;
                 background:url("../../../public/images/list_bg.jpg")  no-repeat;
                 margin-right:10px;
                 ul{
                      list-style:none;
                      padding-left:15px;
                      padding-bottom:5px;
                      position:relative;
                      li{
                          white-space: nowrap;
                          color:#fff;
                          line-height:23px;
                           .link{
                             color:#fff;
                             text-decoration: none;
                             font-size:14px;
                             cursor: pointer;
                             span.two_font{
                               padding-left:14px;
                               padding-right:15px;
                           }
                           span.three_font{
                               padding-left:7px;
                               padding-right:7px;
                           }
                           }
                           .link:hover{
                              color: #ff641c;
                           }
                          
                         .orange{
                             color:#ff641c
                         }
                         .white{
                             color:#fff;
                         }
                     li:nth-child(1):before{
                       content:">";
                       left:0px;
                       color:#fff;
                       position: absolute;;
                     }
                 }
                 ul:last-child{
                     padding-bottom: 75px;
                 }
             }
             }
             div.display{
                 display:flex;
                 align-items: center;
                 width:750px;
                 height:1000px;
                 background:#fff;
             }
         }
</style>
