<template>
   <fate-swiper :dataSet="items"></fate-swiper>
</template>
<script>
     import fateSwiper from '../../component/fateSwiper/index.vue';
     import hbg from "../../../public/images/hbg.jpg";
     import hbg2 from "../../../public/images/hbg2.jpg";
     import hbg4 from "../../../public/images/hbg4.jpg";
     import hbg5 from "../../../public/images/hbg5.jpg";
     import hbg6 from "../../../public/images/hbg6.jpg";
     import hbg7 from "../../../public/images/hbg7.jpg";

    export default{
        name:'Home',
        components:{
            fateSwiper,
        },
        data(){
            return{
                items:[
                    {order:hbg,label:"a",type:"img"},
                    {order:hbg2,label:"b",type:"img"},
                    {order:"http://www.yvvy.cn/home/ckplayer/yvvy.mp4",label:'c',type:"video"},
                    {order:hbg4,label:"d",type:"img"},
                    {order:hbg5,label:"e",type:"img"},
                    {order:hbg6,label:"f",type:"img"},
                    {order:hbg7,label:'g',type:"img"},
                    {order:hbg7,label:"h",type:"img"},
                ]
            }
        }
    }
</script>
