module.exports = {
    entry: './src/scripts/main.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            }
        ],
    },
    output: {
        path: __dirname + 'src/scripts/output',
        filename: 'bundle.js'
    }
}