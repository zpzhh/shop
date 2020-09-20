<template>
    <Item-list :list="list" :headerBg='bg'></Item-list>
</template>
<script>
      import ItemList from "../../component/itemList/index.vue";
      import bg from "../../../public/images/hbg.jpg";
    export default{
        name:'homeWear',
        components:{
          ItemList,
        },
        data(){
            return{
                list:[1,2,3,4,5,6,7,8,9,10,11,12,13],
                bg,
            }
        }
    }
</script>