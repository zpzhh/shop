<template>
    <div class="container">
        <div class="slider">
            <slide-nav :items="items"></slide-nav>
          </div>
          <div class="content"></div>
    </div>
</template>
<script>
  
     import slideNav from "../../component/slideNav/index.vue";

    export default{
        name:"lifeStyle",
        components:{
           slideNav
        },
        data(){
            return{
               items:[
                 
               ]
            }
        },
    }
</script>
<style>
    @import "./index.scss";
</style>