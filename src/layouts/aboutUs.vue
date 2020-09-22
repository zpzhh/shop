<template>
     <ul class="msg">
       <li v-for="info in infos">
           <p>Tel：{{info.name}}</p>
           <p>客服热线：{{info.tel}}</p>
           <p>{{info.csHotLine}}</p>
           <p>{{info.brand}}</p>
           <p>地址：{{info.addr}}</p>
       </li>
     </ul>
</template>
<script>
    export default{
        name:'aboutUs',
        data(){
            return{
                infos:[
                    {pic:'',name:'yvvy温州万象城店',tel:"(86)0577-28806337",csHotLine:'4000603372',brand:"美克家居旗下品牌yvvy家居",addr:'温州市瓯海区温瑞大道'},
                    {pic:'',name:'yvvy青岛万象城店',tel:"(86)0532-55575722",csHotLine:'4000603372',brand:"美克家居旗下品牌yvvy家居",addr:'青岛市市南区山东路'},
                    {pic:'',name:'yvvy成都棕北店',tel:"(86)028-86763337",csHotLine:'4000603372',brand:"美克家居旗下品牌yvvy家居",addr:'成都市武侯区人民南路'},
                    {pic:'',name:'yvvy成都银泰店',tel:"(86)028-86059337",csHotLine:'4000603372',brand:"美克家居旗下品牌yvvy家居",addr:'成都市武侯区天府大道北段'},
                    {pic:'',name:'yvvy兴业太古汇店',tel:"(86)021-62152538",csHotLine:'4000603372',brand:"美克家居旗下品牌yvvy家居",addr:'上海市静安区石门一路288号'},
                ]
            }
        }
    }
</script>
<style  lang="scss" scoped>
   ul.msg{
       list-style: none;
       display:flex;
       justify-content: flex-start;
       flex-wrap: wrap;
       width:100%;
       height: 100%;
       li{
           width:45%;
           height:250px;
           padding:25px 15px;
           margin-right:5px;
           color:#fff;
           border:1px solid #000;
           p{
               margin-top: 0px;
               padding-top: 0px;
           }
       }
   }
</style>