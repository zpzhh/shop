<template>
    <div class="bg">
        <ul>
            <li v-for="item of lists" :key="item">
                    {{item}}
            </li>
        </ul>
    </div>
</template>
 <script>
     export default{
         name:"sildeNav",
         props:{
             items:Array,
         },
         data(){
             return{
                 lists:this.items,
             }
         }
     }
 </script>
 <style lang="scss" type="text/css">
      @import "./index.scss";
 </style>