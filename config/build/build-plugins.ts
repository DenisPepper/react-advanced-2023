import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {WebpackPluginInstance} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {IBuildOptions} from './types/config';

export const buildPlugins = (options: IBuildOptions): WebpackPluginInstance[] => {
    const {path, isDev} = options;

    const plugins: WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: path.html,
        }),

        new webpack.ProgressPlugin()
    ];

    !isDev && plugins.push(
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            //chunkFilename: "css/[name].[contenthash:8].css", - включить при асинхронной загрузке css
        })
    );

    isDev && plugins.push(new ReactRefreshWebpackPlugin());

    return plugins;
}

