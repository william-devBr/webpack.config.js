const path = require('path');
const htmlwebpack = require('html-webpack-plugin');
const Cssplugin   = require('mini-css-extract-plugin');



module.exports = {
    entry : "./src/index.js",
    output :  {
        filename : "main.js",
        path : path.resolve(__dirname,'dist')
    },
    module : {
        rules : [
            {
                test : /\.(sc|sa|c)ss$/,
                use : [
                     Cssplugin.loader,
                     'css-loader',
                     'sass-loader',
                     'style-loader'
                ],
                exclude : /node_modules/,
            }
        ]
    } ,
    plugins : [
        new htmlwebpack({
        filename : "index.html",
        template : "./src/index.html"
        }),
        /*css */
        new Cssplugin({
         filename : "styles.css"
        })
    ]
}