import Vue from "vue";
let _vue=new Vue();
 export function EventBus(){

       return {
           emit:function(event,arg){
               _vue.$emit(event,arg);
              
           },
           on:function(event,func){
             _vue.$on(event,func);
           }
       }  
}
