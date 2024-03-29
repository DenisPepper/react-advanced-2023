import {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {IBuildOptions} from './types/config';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import path from 'path';

export const buildLoaders = (options: IBuildOptions): RuleSetRule[] => {
    const {isDev} = options;

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {targets: 'defaults'}]
                ]
            }
        }
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
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

    const reactRefreshLoader = {
        test: /\.[t]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    transpileOnly: true,
                },
            },
        ],
    };

    const loaders = [
        babelLoader,
        tsLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];

    isDev && loaders.unshift(reactRefreshLoader);

    return loaders;
};
