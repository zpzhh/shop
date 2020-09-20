import home from './src/pages/home/index.vue';
import category from './src/pages/category/index.vue';
import Login from "./src/pages/login/index.vue";
import Wood from "./src/pages/wood/index.vue";
import Register from "./src/pages/register/index.vue";
import chaoKuFurniture from "./src/pages/chaoKuFurniture/index.vue";
import hardDecoration from "./src/pages/hardDecoration/index.vue";
import softDecoration from "./src/pages/softDecoration/index.vue";
import homeWear from "./src/pages/homeWear/index.vue";
import contactUs from "./src/pages/contactUs/index.vue";
 export default [
    {
        path:"/",
        component:home,
    },
    {
        path:'/contactUs',
        component:contactUs,
    },
    {
        path:'/category',
        component:category,
        children:[
            {
                path:"wood",
                component:Wood
            },
            {
                path:"chaoKuFurniture",
                component:chaoKuFurniture
            },
            {
                path:"hardDecoration",
                component:hardDecoration
            },
            {
                path:"softDecoration",
                component:softDecoration
            },
            {
                path:"homeWear",
                component:homeWear
            }
        ]
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:"/register",
        component:Register,
    }
]