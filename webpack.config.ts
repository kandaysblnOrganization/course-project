import webpack from 'webpack';
import {buildWebpackConfig} from "./config/webpack/build/buildWebpackConfig";
import {BuildMode, IBuildPaths} from "./config/webpack/build/types/config";
import path from "path";

const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};
const mode: BuildMode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
});

export default config;