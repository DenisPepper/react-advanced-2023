export type TBuildMode = 'development' | 'production';

export interface IBuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildENV {
    mode: TBuildMode;
    port: number;
}

export interface IBuildOptions {
    mode: TBuildMode;
    path: IBuildPath;
    isDev: boolean;
    devServerPort: number;
}
