let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const ExtractTextPlugin=require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin=require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin=require("uglifyjs-webpack-plugin");
const HardSource=require("hard-source-webpack-plugin");
const CommonsChunksPlugin=require("webpack/lib/optimize/CommonsChunkPlugin");
const purifyCss=require("purifycss-webpack");
const glob=require("glob-all");
const webpack=require("webpack");

module.exports={
    entry:{
        main:path.join(__dirname,'./index.js'),
        jquery:["jquery"],
        vue:["vue"],
    },
    output:{
       path:path.join(__dirname,'./dist'),
       filename:'[name].js'
    },
    externals:{
      $:'jquery',
    },
    devServer:{
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
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader",
               options:{
                   loaders:{
                       scss:ExtractTextPlugin.extract({
                        fallback:"vue-style-loader",
                        use:["css-loader","sass-loader"],
                    }),
                    css:ExtractTextPlugin.extract({
                        fallback:"vue-style-loader",
                        use:["css-loader"],
                    })
                   }
               }
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{
                            minimize:true,
                        }
                    }]
                })
            },
            
        {
            test:/\.scss$/,
           use:ExtractTextPlugin.extract({
               fallback:"style-loader",
               use:[{
                   loader:"css-loader",
                   options:{
                       minimize:true,
                   }
               },"sass-loader"],
           }),
        },

        {
            test:/\.(png|jpe?g|gif|svg)$/,
            loader:'url-loader',
            options:{
                    limit:1000,
                    name:'./images/[name].[hash:7].[ext]'
            }
        },
        {
            test:/\.(wav|mp3|eot|ttf|woff)$/,
            loader:'file-loader',
            options:{
                name:"fonts/[contenthash].[ext]"
            }
        },
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:[{
                loader:'babel-loader',
                options:{
                    presets:["env"]
                }
            }]

        }
       
    ]
    },
    plugins:[
        // new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./index.html'),
            filename:'./index.html',
            minimize:true,
            // minify:{
            //     removeComments:true,
            //     collapseWhitespace:true
            // },
        }),
        new CleanWebpackPlugin({
            root:path.resolve(__dirname,"./dist"),
        }),
        new webpack.HotModuleReplacementPlugin(),
      /* new UglifyJsPlugin({
            cache:true,
        }),*/
        new ExtractTextPlugin("css/styles.css"),
        // new OptimizeCssAssetsPlugin({
        //     cssProcessorOptions:{safe:true,discardComments:{removeAll:true}},
        //     canPrint:true
        // }),
        // new UglifyJsPlugin({
        //     test:/\.js$/,
        //     uglifyOptions:{
        //         compress:{
        //             warning:false,
        //             drop_console:true,
        //             collapse_vars:true,
        //             reduce_vars:true
        //         },
        //         output:{
        //           beautify:false,
        //           comments:false,
        //         },
        //         minimize:true,
        //         mangle:true,
        //     }
        // }),
        new HardSource(),
        // new CommonsChunksPlugin({
        //     name:["base","jquery","vue"],
        //     minChunks:2
        // }),
        // new purifyCss({
        //     paths:glob.sync([
        //         path.resolve(__dirname,"./*.html"),
        //         path.resolve(__dirname,"./*.js")
        //     ])
        // }),

        // new webpack.optimize.ModuleConcatenationPlugin(),

        ]

}