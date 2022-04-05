const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');


const prodConfig = {
		optimization: {
        minimize: true,
        removeAvailableModules: true,
        flagIncludedChunks: true,
        usedExports: true,
        concatenateModules: true,
        sideEffects: false,
    },
    mode: 'production',
    entry: './src/index.js',
    output:{
        filename: '[name].[contenthash].js',
        publicPath: 'https://stag-MODULE_NAME.katarina.xyz/APP/PATH/latest/',
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'medical',
            filename: 'remoteEntry.js',
            exposes: {
                './MedicalApp': './src/bootstrap'
            },
            //shared:packageJson.dependencies
        }),
      
    ]
} 

module.exports = merge(commonConfig, prodConfig);
