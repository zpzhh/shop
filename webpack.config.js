let path=require('path');

const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const HardSource=require("hard-source-webpack-plugin");
const merge=require("webpack-merge");
const webpack=require("webpack");
const base=require("./webpack.base.config");
const { dirname } = require('path');

const isProd=process.env.NODE_ENV=="production";

const config=merge(base,{
    
    entry:{
        main:path.join(__dirname,'./index.js'),
    }, 
    resolve:{
        extensions:[".js",".vue",".jsx",".json"],
       alias:{
           vue:"vue/dist/vue.js",
           '@':path.join(__dirname,'./public'),
       }
    },
    devServer:isProd?{}:{
        contentBase:false,
        historyApiFallback:false,
        hot:true,
        inline:true,
        compress:true,
        watchOptions:{
            aggregateTimeout:2000,
            poll:1000,
        }
    },
})

if(!isProd){
   [
       new HardSource(),
       new CleanWebpackPlugin({
          root:path.resolve(__dirname,"./dist"),
           }),
       new webpack.HotModuleReplacementPlugin(),


].forEach((plugin)=>{
    config.plugins.push(plugin);
   })
}

module.exports=config;