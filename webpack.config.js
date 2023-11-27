const path = require('path')
const miniCss = require('mini-css-extract-plugin')

module.exports = {
    mode: "production",
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(s*)[ac]ss$/,
                use: [
                    miniCss.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: "style.css"
        })
    ]
}