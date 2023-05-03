import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {WebpackPluginInstance} from 'webpack';
import {IBuildOptions} from "./types/config";

export const buildPlugins = (options: IBuildOptions): WebpackPluginInstance[] => {
    const {path} = options;

    return [

        new HtmlWebpackPlugin({
            title: 'react study project 2023!',
            template: path.html,
        }),

        new webpack.ProgressPlugin(),
    ];
}

