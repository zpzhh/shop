import Vue from 'vue';
import {Form,Input,Button,FormItem,
    Select,Option,Autocomplete,Radio
,Checkbox,Pagination} from "element-ui";
import vueRouter from "vue-router";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import routes from "./routes.js";
import {EventBus} from "./public/utils/eventBus.js"
Vue.prototype.$ELEMENT={size:"small",zIndex:3000};
Vue.prototype.$EventBus=EventBus();
Vue.use(vueRouter);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
Vue.use(Select);
Vue.use(Pagination);
Vue.use(Checkbox);
Vue.use(Option);
Vue.use(Autocomplete);
Vue.use(Radio);


let router=new vueRouter({
   routes,
});
new Vue({
    el:'#app',
    router,
    render:(h)=>h(App)
})