<template>
    <div class='outer_bg'>
        <div class="bg">
            <div class='logo'>
               <img :src="logo" alt="">
            </div>
            <ul class='nav_menu' @mouseover="letBottomVisible"
               @mouseleave="letBottomHidden"  @click="navigatorTo"
            >
                <li v-for='(value,idx) of tabList' :key='value[0]' :data-label="value[0]"
                 :data-path="value[2]":data-idx="idx"  class="fcolor"
                >
                       {{value[1]}}
                </li>
                <span id="line"></span>
            </ul>
            <div class="us_box">
            <div class='search'>
              <el-input v-model="waitForSearch"  size="medium" auto-complete="on"
              placeholder="检索商品" prefix-icon="el-icon-search" class="inputBgNone"> 
               </el-input>
            </div>
             <div class="userInto">
                <router-link  to="/login" class="font">登录</router-link>
                  <span class="middleLine"></span>
                <router-link to="/register" class='font' >注册</router-link>
             </div>
        </div>
    </div>
             <div id="bottom_box" @mouseover="visibleAgain"
             @mouseleave="letBottomHidden"
           >
             <div class="innerContainer" @click="emitTo">
               <router-link  to="/category" v-for="item of currentItem"
                class="gcolor"  :key="item"
             >
                    {{item}}
               </router-link>
             </div>
           </div>
        </div>
</template>
<script>
     import logo from "../../../public/images/logo.png";
     import prefix from "../../../public/images/fdj.png";
     import $ from "jquery";
    export default{
        name:'TopNav',
        mounted(){
            this.$line=$("#line");
            this.$Bottom_box=$("#bottom_box");
            this.$ul=$("ul.nav_menu");
            this.$logoWidth=$("div.logo").width();
            this.$iC=$("div.innerContainer");
            let arr=[]
            console.log(this.$logoWidth)
            $("ul.nav_menu>li:not('#line')").each(function(idx,ele){
                arr[arr.length]=ele.getBoundingClientRect().width;
            })
             this.$mw=arr;

            this.$EventBus.on("jump",(text)=>{
               this.findTheRightEle($("ul.nav_menu"),text);
            })
        },
        data(){
            return {
            tabList:[['homePage','首页',"/"],['lifeStyle','生活方式',"/lifeStyle"],['chaoKuFurniture','潮酷家具',"/category/chaoKuFurniture"],
            ['hardDecoration','硬装饰品',"/category/hardDecoration"],['softDecoration','软装饰品',"/category/softDecoration"],['homeWear',"家居用品","/category/homeWear"],['brandInstruction',"品牌介绍","/brandInstruction"]
       ,["contactUs","联系我们","/contactUs"],['activityZone',"活动专场","/activityZone"],['onlineMall',"在线商城","/onlineMall"]],
          currentItem:[],
          currIndex:'',
          tabItems:{
              homePage:[],
              lifeStyle:["平行空间系列","WING系列","刀锋系列","源代码系列",
            "艺术系列","雪山系列","石器时代系列","鸡尾酒系列","POWER系列","迷雾系列"],
              chaoKuFurniture:["实木","沙发","装饰家具"],
              hardDecoration:["桌面摆饰","灯饰","装饰植物","装饰画","墙面挂件","装饰镜"],
              softDecoration:["地毯","装饰枕","桌面摆饰"],
              homeWear:["餐饮用具","生活配饰"],
              brandInstruction:[],
              activityZone:[],
              onlineMall:[]
          },
          waitForSearch:'',
          prefix,
          lineCurPos:0,
          currIdx:0,
        form:{
            name:'表单',
        },
        logo:logo,
          }
        },
        methods:{
            backToInit(time){
             this.$line.animate({left:this.lineCurPos},time).stop(true,false);
                
             this.$line.animate({left:this.lineCurPos,width:this.$mw[this.currIdx]},time)
            
            },
            emitTo(e){
              let tag=e.target.tagName.toLowerCase();
              if(tag=="a"){
                this.$EventBus.emit("curItem",$.trim(e.target.textContent));
                this.$EventBus.emit("topToside",this.currIndex);
              }
            
            },
            navigatorTo(e){
                 let tag=e.target.tagName.toLowerCase();
                 let  path;
                 if(tag=="li"){
                    path=e.srcElement.dataset.path;
                     this.$router.push(path);
                     this.lineTo(e,this.$line,200);
                    this.$EventBus.emit("curItem",$.trim(e.target.textContent));
                 }
                 this.letLineFixThere(e);
            },
            letLineFixThere(e){
              let tag=e.target.tagName.toLowerCase();
              let idx=0;
              let sum=0;
      
                 if(tag=="li"){
                    idx=e.srcElement.dataset.idx-0;
                   sum=this.$mw.slice(0,idx).reduce(function(sum,el){
                        return sum+el;
                    },0)
                  
                     this.currIdx=idx;
                     this.lineCurPos=sum+idx*15;
                   
                    
      
                 }
            },
             findTheRightEle(parent,arg){
               
                   parent.children().each((idx,el)=>{
              
                     if($.trim($(el).text())==arg){
                
                         let pos=this.lineTo(el,this.$line,200);
                         this.lineCurPos=pos[1];
                         this.currIdx=el.dataset.idx-0;
                     }
                  })
              },
               lineTo(e,line,time,smooth=true){
                 let dis=0,limit;
    
                     let arr=this.$mw;
                     limit=e.srcElement?e.srcElement.dataset.idx:e.dataset.idx;
                  for(var i=0;i<=limit-1;i++){
                           dis+=arr[i];
                   }
                      dis+=(limit*1)*15;
                     if(smooth){
                  line.animate({left:dis-5},time).stop(true,false);
                }
                line.animate({left:dis-5,width:arr[limit*1]+10
                },time)
                      return [arr[limit*1],dis];
                     
                },
            login(){
                confirm("是否登录")
            },
          
            letBottomVisible(e){
                let tag=e.target.tagName.toLowerCase();
                let pos=[];
                this.$Bottom_box.css("visibility","visible");
                if(tag=="li"){
                     this.currentItem=this.tabItems[e.srcElement.dataset.label];
                     this.currIndex=e.srcElement.dataset.label;
                     pos=this.lineTo(e,this.$line,200);
    
                    this.$iC.css("left",pos[1]+this.$logoWidth+65);
                }
            },

            letBottomHidden(){
              this.$Bottom_box.css("visibility","hidden");
              this.backToInit(200);
            },
            visibleAgain(){
                this.$Bottom_box.css("visibility","visible");
            }
        }
    }
</script>
<style lang='scss'  type='text/css' scoped>
    @import "index.scss";
    div.us_box{
      display:flex;
      align-items:center;
    }
    @media screen and (max-width: 1050px){
      div.us_box{
        position: absolute;
        top:95px;
        right:0px;
      }
      div.search{
        margin-left: 0px !important;
      }
      div.userInto{
        width:100px !important;
      }
    }
   
       .font{
       color:#fff;
       text-decoration:none;
     }
     span.middleLine{
        display:inline-block;
         height:13px;
        border:1px solid #fff;
        margin:0px 5px;
     }

    
</style>
<style>
 .inputBgNone input.el-input__inner{
    background:none;
    width:190px;
    height:32px;
    margin-bottom:0px;
    border-radius:3px;
    border:1px solid #999;
}
</style>


