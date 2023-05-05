import {buildWebpackConfig} from "./config/build/build-webpack-config";
import {IBuildENV, IBuildOptions, TBuildMode} from "./config/build/types/config";
import path from "path";

const DEFAULT_DEV_SERVER_PORT = 3000;
const DEVELOPMENT_MODE: TBuildMode = 'development';

export default (env: IBuildENV) => {
    if (env.mode !== 'production' && env.mode !== 'development') {
        throw new Error('wrong webpack mode');
    }

    const options: IBuildOptions = {
        mode: env.mode,
        path: {
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
        },
        isDev: env.mode === DEVELOPMENT_MODE,
        devServerPort: env.port ?? DEFAULT_DEV_SERVER_PORT,
    };

    return buildWebpackConfig(options);
};
