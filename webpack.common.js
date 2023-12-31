const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   entry: [
       "./src/index.js",
       "./src/index.css"
   ],

   module: {
      rules: [
         {
            test: /\.html$/,
            use: ["html-loader"],
         },
         {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
               loader: "url-loader",
            },
         },
         {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
               },
            },
         },
      ],
   },
};