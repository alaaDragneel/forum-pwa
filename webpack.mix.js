let mix = require('laravel-mix');
const {GenerateSW} = require('workbox-webpack-plugin');
require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
.webpackConfig({
	plugins: [
		new GenerateSW({
			maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
			globDirectory: `${__dirname}/public`,
			globPatterns: [
				'**/*.{html,css,js}',
				'fonts/**/*.*'
			],
			importWorkboxFrom: 'local',
			navigateFallback: '/',
			//  swSrc: './src/sw.js',
			swDest: path.join(`${__dirname}/public`, 'service-worker.js'),
			clientsClaim: true,
			skipWaiting: true,
			templatedUrls: {
				'/': [
					`../resources/views/welcome.blade.php`,
				]
			},
			runtimeCaching: [
				{
					urlPattern: new RegExp(`${process.env.APP_URL}`),
					handler: 'networkFirst',
					options: {
						cacheName: `${process.env.APP_NAME}-${process.env.APP_ENV}`
					}
				},
				{
					urlPattern: new RegExp('https://fonts.(googleapis|gstatic).com'),
					handler: 'cacheFirst',
					options: {
						cacheName: 'google-fonts'
					}
				}
			]
		}),
	]
});

mix.sourceMaps(!mix.inProduction());

mix.disableNotifications();