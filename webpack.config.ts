import path from 'path';
import webpack from 'webpack';
import {buildPlugins} from "./config/build/build-plugins";
import {buildLoaders} from "./config/build/build-loaders";

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),

    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },

    mode: 'development',

    plugins: buildPlugins(),

    module: {
        rules: buildLoaders(),
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;
