const path = require('path');

module.exports = {
    entry: {
        'sidebar': './blocks/sidebar/src/index.js',
        'admin': './scripts/src/admin.js'
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'scripts/build')
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