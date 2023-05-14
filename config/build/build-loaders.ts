import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/config";
import path from "path";

export const buildLoaders = (options: IBuildOptions): RuleSetRule[] => {
    const {isDev} = options;

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        /* изменяет имена классов только для файлов с подстрокой .module. */
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        /* задает правила именования классов для модульного css */
                        localIdentName: isDev ?
                            `${path.basename('[name]')}__[local]__[hash:base64:4]`
                            :
                            '[hash:base64:8]',
                    }
                }
            }
        ],
    };

    return [
        tsLoader,
        cssLoader,
    ];
};
