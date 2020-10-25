const path = require('path');

module.exports = {
    entry: {
        // Main front facing script
        'index': './scripts/src/index.js',
        // This is the Gutenberg blocks
        'gutenblocks': './blocks/index.js',
        // Admin script for adding Gutenberg settings to blocks
        'admin': './scripts/src/admin.js',
        // template level scripts
        'home': './scripts/src/templates/home.js',
        'collection': './scripts/src/templates/collection.js',
        'post': './scripts/src/templates/post.js',
        // Styles
        // 'main': './styles/index.scss'
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