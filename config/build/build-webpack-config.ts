import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./build-plugins";
import {buildLoaders} from "./build-loaders";

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {

    const {mode, path} = options;

    return {
        mode,

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
