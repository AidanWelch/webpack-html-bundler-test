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
				hotUpdate: 'auto', // doesn't seem to work
				minify: 'auto',
				css: { inline: true }
			})
		]
	}
];