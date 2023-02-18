import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildOptions } from "./types/config";

export const buildLoaders = ({ isDev }: IBuildOptions): webpack.RuleSetRule[] => {

	const svgLoader = {
		test: /\.svg$/,
		use: [ '@svgr/webpack' ],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const babelLoader = {
		test: /\.(js|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: [
					'@babel/preset-env'
				],
				plugins: [
					[
						"i18next-extract",
						{
							locales: [ "ru", "en" ],
							keyAsDefaultValue: true,
						}
					]
				]
			}
		}
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:8]'
							: '[hash:base64:8]',
						exportLocalsConvention: 'camelCase',
					},
				},
			},
			"sass-loader",
		],
	};

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		tsLoader,
		cssLoader,
	];
};