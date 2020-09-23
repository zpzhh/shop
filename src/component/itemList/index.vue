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
               prev:"上一页",
               next:'下一页',
               curList:[],
               total:0,
            }
        },
        methods:{
            change(val){
               this.curList=this.list.slice((val-1)*this.pagination.pageSize,val*this.pagination.pageSize);
            // document.querySelector("div.itemList_outer_box").scrollIntoView(true,{behavior:"smooth"});
            }
        }
    }
</script>
<style lang="scss" scoped >
  
  div.itemList_outer_box{
      height:100%;
      width:100%;
      margin-bottom: 150px;
      position:relative;
      header{
          img{
              width:100%;
              height:400px;
          }
      }
       footer{
         div.pagination{
                position:absolute;
                right:0px;
                bottom:0px;
            &/deep/ ul.el-pager{
                background-color: rgb(20,20,20);
               
            }
            & /deep/ div.el-pagination>button{
                background-color: rgb(20,20,20)!important;
            }
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
                   height:148px;
                   border:#8e8e8e solid 2px;
                   margin:0 0 15px 3px;
                   padding-bottom:10px;
               }
           }
       }
  }
</style>
<style>
    div.pagination>div.el-pagination{
        background-color: rgb(20,20,20)!important;
    }
  div.el-pagination>button.btn-prev  div.el-pagination>button.btn-next{
      background-color: rgb(20,20,20) !important;
  }
  button.btn-prev>i.el-icon-arrow-left::before{
    content:'上一页' !important;
    color:#f03807;
  }

  button.btn-next>i.el-icon-arrow-right::before{
    content:'下一页' !important;
    color:#f03807;
  }
    ul.el-pager>li.number{
        background-color: rgb(20,20,20) !important;
        color:#f03807;
    }
    ul.el-pager>li.number:hover{
        color:#ff651c;
    }

     ul.el-pager>li.active{
             color:#fff;
         }
</style>