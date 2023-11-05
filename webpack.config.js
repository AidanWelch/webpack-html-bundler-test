'use strict';
const path = require( 'path' );
const HtmlBundlerPlugin = require( 'html-bundler-webpack-plugin' );

module.exports = ( env, argv ) => [
	{
		devtool: ( argv.mode === 'development' ) ? 'inline-source-map' : false,
		output: {
			path: path.resolve( __dirname, 'build' ),
			clean: true
		},
		plugins: [
			new HtmlBundlerPlugin({
				entry: './src/views',
				hotUpdate: true, // doesn't seem to work
				minify: 'auto',
				css: { inline: true }
			})
		],
		module: {
			rules: [
				{
					test: /\.(ico|png|jp?g|webp|svg)$/,
					type: 'asset/resource',
					generator: {
						filename: 'img/[name].[hash:8][ext][query]',
					}
				}
			]
		},
		devServer: {
			hot: true,
			port: 8000,
			allowedHosts: 'auto',
			static: path.resolve( __dirname, 'build' ),
			watchFiles: 'src/**/*',
			client: { progress: true },
			devMiddleware: { writeToDisk: true }
		}
	}
];