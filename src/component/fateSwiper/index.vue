<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions"
           @slide-change="slideChange"
        >
            <swiper-slide  v-for="data in dataSet" :key="data.label">
                <img  v-if="data.type=='img'"  :src="data.order"  alt="">
                <video  v-else  controls="controls" autoplay :src="data.order"></video>
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
            }
        },
        directives:{
          swiper:directive
        },
        methods:{
           slideChange(){
              let div= document.createElement("div");
               div.className="insertForIndex";
               let idx=this.$refs.mySwiper.swiper.activeIndex;
                console.log(idx);
               if(!$(`div.swiper-wrapper>div.swiper-slide:eq(${idx})>div.insertForIndex`).length){
                $(`div.swiper-wrapper>div.swiper-slide:eq(${idx})`)
              .append(div);
               }
            
           },
          
        },
        computed:{
            swiper(){
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted(){
            
    
        }
       
    }
</script>
<style lang="scss" scoped>
  div.wrapper /deep/div.swiper-position{
       top:200px;
       right:40px;
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
        height:100% !important;
        padding:0 0;
        margin:0 0;

}

  div.wrapper /deep/span.swiper-pagination-bullet{
       height:16px;
       width:16px;
       border:1.5px solid #ff651c;
       margin:15px 0px !important;
       background-color: #ff651c;
  }
 
  div.wrapper{
       width:100%;
       height:100%;
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
