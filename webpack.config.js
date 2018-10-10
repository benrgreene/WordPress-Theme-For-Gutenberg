const path = require('path');

module.exports = {
    entry: {
        'sidebar': './blocks/sidebar/src/index.js',
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'blocks/build')
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
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    mode: 'development'
}