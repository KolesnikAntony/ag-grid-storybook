const { merge } = require('webpack-merge');
const packageJson = require('./../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    output:{
        publicPath:'http://localhost:8082/'
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html'
        },
    },
    target: 'web',
    plugins: [
        new ModuleFederationPlugin({
            name: 'medical',
            filename: 'remoteEntry.js',
            exposes: {
                './MedicalApp': './src/bootstrap'
            },
            shared:packageJson.dependencies
        }),
        
    ]
};

module.exports = merge(commonConfig, devConfig);