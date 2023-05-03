import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    mode: 'production',
}

export default config;
