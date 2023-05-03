import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    mode: 'development',
    plugins: [

        new HtmlWebpackPlugin({
            title: 'react study project 2023!',
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),

        new webpack.ProgressPlugin(),
    ],
}

export default config;
