import {IBuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export const buildDevServer = (options: IBuildOptions): DevServerConfiguration => {
    const {devServerPort} = options;

    return {
        port: devServerPort,
        open: true,
        historyApiFallback: true,
    };
};
