const path = require('path');

module.exports = {
    entry: {
        'sidebar': './blocks/sidebar/src/index.js',
        'admin': './scripts/src/admin.js',
        'main': './styles/index.scss'
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'assets')
    }, 
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-env', 'babel-preset-react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "styles/[name].css",
                        },
                    },
                    {
                        loader: "extract-loader",
                        options: {
                            publicPath: "../",
                        }
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        } 
                    }
                ],
            }
        ]
    },
    mode: 'production'
}