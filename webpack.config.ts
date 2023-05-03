import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
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

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;
