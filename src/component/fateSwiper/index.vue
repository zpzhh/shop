<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions"
           @slide-change="slideChange"
        >
            <swiper-slide  v-for="data in dataSet" :key="data.label">
                <img  v-if="data.type=='img'"  :src="data.order"  alt="">
                <video  v-else  controls="controls"  :src="data.order"></video>
            </swiper-slide>
            <div :class="['swiper-pagination','swiper-position']" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
  
  import {swiper,swiperSlide,directive} from "vue-awesome-swiper";
  import pic from "../../../public/images/movief1.jpg";
  import "swiper/css/swiper.css";
  import $ from "jquery";
    export default{
        name:"fateSwiper",
        components:{
           swiper,
           swiperSlide
        },
        props:{
            dataSet:Array
        },
        created(){
          
        },
        data(){
            return{
                swiperOptions:{
                    autoplay:true,
                    pagination:{
                        el:".swiper-pagination",
                        clickable:true,
                    },
                   scrollbar:{
                        hide:true,
                   },
                    initialSlide:0,
                    watchSlidesProgress : true,
                    height:window.innerHeight,
                    mousewheel:true,
                    speed:1000,
                    direction:'vertical',
                },
                show:true,
                even:false,
                odd:false,
                O:false,
                floats:[require("../../../public/images/float.png"),
                        require("../../../public/images/float1.png"),
                        ]
            }
        },
        directives:{
          swiper:directive
        },
        methods:{
        
           slideChange(){
               
               let idx=this.$refs.mySwiper.swiper.activeIndex;

             /*##############*/
             idx%2==0?(this.even=true,this.odd=false):(this.even=false,this.odd=true);
                if(this.even){
                    this.$div_trs.innerHTML=`<img src=${this.floats[0]} alt=''/>`
                    $("div.swiper-container>div").remove('.transition_area');
                    this.$SC.append(this.$div_trs);
                   $(this.$div_trs).css({left:"100%",top:160}).animate({left:0},1000*1.5);
               }
               if(this.odd){
                this.$div_trs.innerHTML=`<img src=${this.floats[1]} alt=''/>`;
                $("div.swiper-container>div").remove('.transition_area');
                this.$SC.append(this.$div_trs);
                $(this.$div_trs).css({top:-280,left:0}).animate({top:160},1000*1.5);
               }
           },
          
        },
        computed:{
            swiper(){
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted(){
         let div_trs= document.createElement('div');
            div_trs.className="transition_area";
            this.$SC=$("div.swiper-container");
            this.$div_trs=div_trs;
    }
}
</script>
<style lang="scss" scoped>

    .slide-enter-active, .slide-leave-active{
        animation: debounces 5s ease;
    }
    
   

    @keyframes debounces {
        0%{
            transform:translateY(0px);
        }50%{
            transform:translateY(300px);
        }100%{
            transform:translateY(0px);
        }
    }
    
 
     


  div.wrapper /deep/div.swiper-position{
       top:calc(50%);
       right:calc(6%);
  }
  div.wrapper /deep/div.swiper-slide>{
      background-color: #000;
     img{
        width:100% !important;
         height:100% !important;
     }
 
  }
  div.wrapper /deep/div.swiper-slide>video{
        width:100% !important;
        height:92% !important;
        margin:0 0;

}
div.wrapper /deep/div.swiper-container{
        width:100% !important;
        height:100vh !important;
        background-color: #000;
        padding:0 0;
        margin:0 0;

}
  div.wrapper /deep/span.swiper-pagination-bullet{
       height:13px;
       width:13px;
       border:1px solid #ff651c;
       margin:15px 0px !important;
       
  }
  div.wrapper /deep/span.swiper-pagination-bullet-active{
      background-color: #ff651c;
       
  }
 
  div.wrapper{
       width:100%;
       height:100%;
       margin-top:0px;
       position:relative;
       overflow: hidden;
  }
  div.insertForIndex{
      position:absolute;
      top:200px;
      left:200px;
      width:200px;
      height:200px;
      background-color: salmon;
      animation: float 3s linear alternate;
  }
  video{
      object-fit: contain;
  }
   @keyframes float {
        0%{
            transform: translateX(0px);
        }50%{
            transform: translateX(200px);
        }100%{
            transform: translateY(200px);
        }
   }
</style>
<style lang="scss">
    div.transition_area{
        position:absolute;
        height:200px;
        width:100vw;
        top:-250px;
        overflow: hidden;
        z-index:8;
        img{
            width:90%;
            height:100%;
        }
    }
</style>
