import CopyPlugin from "copy-webpack-plugin";
import RemarkHTML from "remark-html";
import RemarkGFM from "remark-gfm";

import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	resolve: {
		extensions: [".js"],
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.md$/,
				use: [
					{ loader: "html-loader" },
					{
						loader: "remark-loader",
						options: {
							remarkOptions: {
								plugins: [
									[RemarkHTML, { sanitize: false }],
									RemarkGFM,
								],
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: "./public", to: "" }],
		}),
	],
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
		hot: true,
	},
	watchOptions: {
		ignored: /node_modules/,
	},
};
