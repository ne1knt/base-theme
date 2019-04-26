/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

/* eslint-disable import/no-extraneous-dependencies */
// Disabled due webpack plugins being dev dependencies

// TODO: merge Webpack config files

const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const BabelConfig = require('./babel.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const projectRoot = path.resolve(__dirname, '..', '..');

const publicPath = '/static/frontend/Scandiweb/pwa/en_US/Magento_Theme/';


module.exports = {
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.scss',
            '*'
        ]
    },

    target: 'node',

    cache: false,

    stats: {
        warnings: false
    },

    entry: [
        path.resolve(projectRoot, 'Scandiweb', 'server', 'index.js')
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: BabelConfig
                    }
                ]
            }
        ]
    },

    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(projectRoot, 'Scandiweb', 'pwa', 'Magento_Theme', 'server'),
        pathinfo: true,
        publicPath
    },

    plugins: [
        new CleanWebpackPlugin(),
        // new MinifyPlugin({
        //     removeConsole: true,
        //     removeDebugger: true
        // }, {
        //     comments: false
        // })
    ]
};
