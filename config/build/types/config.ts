export type TBuildMode = 'development' | 'production';

export interface IBuildPath {
    entry: string;
    build: string;
    html: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    path: IBuildPath;
    isDev: boolean;
}