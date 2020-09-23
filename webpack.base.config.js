const path=require("path");
const webpack=require("webpack");
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require("extract-text-webpack-plugin");
const UglifyJsPlugin=require("uglifyjs-webpack-plugin");
const FriendlyErrorsPlugin=require("friendly-errors-webpack-plugin");
const OptimizeCssAssetsPlugin=require("optimize-css-assets-webpack-plugin");
const purifyCss=require("purifycss-webpack");
const CommonsChunksPlugin=require("webpack/lib/optimize/CommonsChunkPlugin");
const glob=require("glob-all");
const isProd=process.env.NODE_ENV==="production";

module.exports={
    devtool:isProd?false:"#cheap-module-source-map",
    output:{
      path:path.join(__dirname,"./dist"),
      filename:"[name][hash].js"
    },
    resolve:{
        alias:{

        }
    },
    externals:{

    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader",
                options:{
                   loaders:{
                       scss:isProd?ExtractTextPlugin.extract({
                        fallback:"vue-style-loader",
                        use:["css-loader","sass-loader"],
                    }):["vue-style-loader","css-loader","sass-loader"],
                    css:isProd?ExtractTextPlugin.extract({
                        fallback:"vue-style-loader",
                        use:["css-loader"],
                    }):["vue-style-loader","css-loader"]
                   }
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
    
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:'[name].[ext]?[hash]'
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
                test:/\.css$/,
                use:isProd?ExtractTextPlugin.extract({
                    use:[{
                        loader:"css-loader",
                        options:{
                            minimize:true,
                        }
                    }],
                    fallback:'vue-style-loader',
                }):["vue-style-loader","css-loader"]
            },
            {
                test:/\.scss$/,
                use:isProd?ExtractTextPlugin.extract({
                     use:[
                         {
                             loader:'css-loader',
                             options:{
                                 minimize:true,
                             }
                         },
                         "sass-loader",  
                     ],
                     fallback:'vue-style-loader'
                }):["vue-style-loader","css-loader","sass-loader"]
            }
        ]
    },
    performance:{
        hints:false,
    },
    plugins:isProd?[
        new webpack.DefinePlugin({
            $:"jquery",
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"./index.html"),
            filename:'index.html'
        }),
        new UglifyJsPlugin({
            compress:{
                warnings:false,
            }
        }),
        new ExtractTextPlugin({
            filename:"css/styles.css",
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions:{safe:true,discardComments:{removeAll:true}},
            canPrint:true
        }),
        new purifyCss({
            paths:glob.sync([
                path.resolve(__dirname,"./*.html"),
                path.resolve(__dirname,"./*.js")
            ])
        }),
        new CommonsChunksPlugin({
            name:["base","jquery","vue"],
            minChunks:2
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]:[
        new FriendlyErrorsPlugin(),
        new webpack.DefinePlugin({
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"./index.html"),
            filename:'index.html'
        })
    ]
}