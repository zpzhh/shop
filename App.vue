<template>
    <div>
        <div class="fixed">
            <top-nav></top-nav>
        </div> 
        <div class="main"><router-view></router-view></div>
       <div class="bottom">
        <bottom></bottom>
       </div>
    </div>
</template>
<script>
  import topNav from "./src/component/TopNav/index.vue";
  import home from "./src/pages/home/index.vue";
  import Bottom from "./src/pages/footer/index.vue";
   export default  {
      name:"App",
      components:{
        topNav,
        home,
        Bottom,
      }
   }
</script>

<style lang="scss">
     
  div.fixed{
        position:fixed;
        z-index: 999999;
        width:100%;
        margin:0px,0px;
        top:0px;
  }
  div.main{
    min-height:100vh;
    width:102%;
  }
  div.bottom{
    position:fixed;
    z-index:888888;
    bottom:0px;
    width:100%;
  }
 </style>
