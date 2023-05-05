import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./build-plugins";
import {buildLoaders} from "./build-loaders";
import {buildDevServer} from "./build-dev-server";

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {

    const {mode, path, isDev} = options;

    return {
        mode,
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        entry: path.entry,

        output: {
            filename: '[name][contenthash].js',
            path: path.build,
            clean: true,
        },

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(),
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    };
};
