<template>
    <div class="itemList_outer_box">
        <header>
           <img :src="headerBg" alt="">
        </header>
        <main>
          <ul class="list_main">
           <li v-for="val in curList">{{val}}</li>
          </ul>
        </main>
        <footer>
           <div class="pagination">
            <el-pagination
            :page-size="20"
            :pager-count="11"
            layout="prev,pager,next"
            :total="total"
            @current-change="change"
          ></el-pagination>
           </div>
        </footer>
    </div>
</template>
<script>
    export default{
        name:'ItemList',
        mounted(){
          this.curList=this.list.slice(0,12);
        },
        created(){
           let len=this.list.length;
           let rest=len%this.pagination.pageSize;
           if(!!rest){
            this.total=len+(this.pagination.pageSize-rest);
           }else{
               this.total=len;
           }
          
        },
        props:["list","headerBg"],
        data(){
            return{
               pagination:{
                   pageSize:12,
                   pagerCount:11,
               },
               curList:[],
               total:0,
            }
        },
        methods:{
            change(val){
               this.curList=this.list.slice((val-1)*this.pagination.pageSize,val*this.pagination.pageSize);
            }
        }
    }
</script>
<style lang="scss" scoped >
  div.itemList_outer_box{
      height:100%;
      width:100%;
      position:relative;
      header{
          img{
              width:100%;
              height:400px;
          }
      }
       footer{
         div.pagination{
            margin-top:82px;
            margin-left:76%;
         }
       }
       main{
           ul.list_main{
               width:100%;
               height:450px;
               display:flex;
               justify-content:flex-start;
               flex-wrap:wrap;
               margin-top:2px;
               padding:0px 0px;
               list-style:none;
               li{
                   width:24%;
                   border:1px solid #fff;
                   height:148px;
                   background-color: transparent;
                   border:#8e8e8e solid 2px;
                   margin:0 0 15px 3px;
                   padding-bottom:10px;
               }
           }
       }
  }
</style>