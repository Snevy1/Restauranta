const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = merge(common,{
    mode: "production",
    entry: "./src/index.js",
    
    output: {
        filename: "[name]main.[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(), new TerserPlugin(),
          new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify: {
                removeAttributeQuotes:true,
                collapseWhitespace: true,
                removeComments: true
            }
          })
        ],
      },

    plugins: [ new MiniCssExtractPlugin({
        filename: "[name].[contentHash].css"
    }) ,new CleanWebpackPlugin(),

    

],

    module: {
        rules:[

            {
                test: /\.css$/i,
                include: [
   path.resolve(__dirname, './src/main.css'),
   path.resolve(__dirname, './src/style.css'),
],
                use: [
                    MiniCssExtractPlugin.loader,
                     //extract css into files
                     "css-loader", //Turns css into commonJS
                     "sass-loader"] //coverts sass  into css
              },
        ]
    }
    

    
})
