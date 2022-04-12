const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: [{loader: MiniCssExtractPlugin.loader},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            esModule: true,
                            modules: {
                                namedExport: true,
                                localIdentName: "project-name--[local]",
                            },
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    }],
                include: /\.module\.(css|scss)$/,
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", 'sass-loader'],
                exclude: /\.module\.(css|scss)$/,
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/i,
                oneOf: [
                    {
                        type: 'asset',
                        resourceQuery: /url/, // *.svg?url
                    },
                    {
                        // test: /\.svg$/i,
                        issuer: /\.[jt]sx?$/,
                        use: [{
                            loader: '@svgr/webpack',
                            options: {
                                svgo: {
                                    plugins: [
                                        { removeViewBox: false },
                                        {
                                            removeAttrs: {
                                                attrs: '(fill|stroke)',
                                            }
                                        }
                                    ]
                                }
                            }
                        }]
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',

        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

    ],
    devtool: 'source-map',
};
