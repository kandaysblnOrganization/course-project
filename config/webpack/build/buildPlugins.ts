import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {IBuildOptions} from "./types/config";

export const buildPlugins = ({paths}: IBuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ];
};