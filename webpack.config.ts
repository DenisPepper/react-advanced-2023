import {buildWebpackConfig} from "./config/build/build-webpack-config";
import {IBuildOptions, TBuildMode} from "./config/build/types/config";
import path from "path";

const mode:TBuildMode = 'development';
const isDev = mode === 'development';

const options: IBuildOptions = {
    mode: "development",
    path: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev,
};

export default buildWebpackConfig(options);
