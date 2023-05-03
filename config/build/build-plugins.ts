import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {WebpackPluginInstance} from 'webpack';
import path from "path";

export const buildPlugins = (): WebpackPluginInstance[] => {
    return [

        new HtmlWebpackPlugin({
            title: 'react study project 2023!',
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),

        new webpack.ProgressPlugin(),
    ];
}

