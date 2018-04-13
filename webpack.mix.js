let mix = require('laravel-mix');
const { InjectManifest } = require('workbox-webpack-plugin');
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
		new InjectManifest({
			maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
			globDirectory: `${__dirname}/public`,
			globPatterns: [
				'**/*.{html,js,css,jpg,png,gif,svg,wotf,wotff,xml,json}',
				'fonts/**/*.*'
			],
			importWorkboxFrom: 'local',
			// navigateFallback: '/offline',
			swSrc: path.join(`${__dirname}/public`, 'service-worker-base.js'),
			swDest: path.join(`${__dirname}/public`, 'service-worker.js'),
			// clientsClaim: true,
			// skipWaiting: true,
			templatedUrls: {
				'/offline-home': [
					'../resources/views/offline-home.blade.php',
					// '/css/app.css',
				],
				'/offline': [
					'../resources/views/offline.blade.php',
				],

			},
			// runtimeCaching: [
			// 	{
			// 		urlPattern: new RegExp(`${process.env.APP_URL}`),
			// 		handler: 'networkFirst',
			// 		options: {
			// 			cacheName: `${process.env.APP_NAME}-${process.env.APP_ENV}`
			// 		}
			// 	},
			// 	{
			// 		urlPattern: new RegExp('https://fonts.(googleapis|gstatic).com'),
			// 		handler: 'cacheFirst',
			// 		options: {
			// 			cacheName: 'google-fonts'
			// 		}
			// 	}
			// ]
		}),
	]
});

mix.sourceMaps(!mix.inProduction());

mix.disableNotifications();

// For Generate SW VEry Easy And Cool
// plugins: [
// 	new GenerateSW({
// 		maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
// 		globDirectory: `${__dirname}/public`,
// 		globPatterns: [
// 			'**/*.{html,css,js}',
// 			'fonts/**/*.*'
// 		],
// 		importWorkboxFrom: 'local',
// 		navigateFallback: '/offline',
// 		//  swSrc: './src/sw.js',
// 		swDest: path.join(`${__dirname}/public`, 'service-worker.js'),
// 		clientsClaim: true,
// 		skipWaiting: true,
// 		templatedUrls: {
// 			'/offline': [
// 				`../resources/views/offline.blade.php`,
// 			],
// 			'/latest-threads': [
// 				`../resources/views/offline.blade.php`,
// 			],
// 		},
// 		runtimeCaching: [
// 			{
// 				urlPattern: new RegExp(`${process.env.APP_URL}`),
// 				handler: 'networkFirst',
// 				options: {
// 					cacheName: `${process.env.APP_NAME}-${process.env.APP_ENV}`
// 				}
// 			},
// 			{
// 				urlPattern: new RegExp('https://fonts.(googleapis|gstatic).com'),
// 				handler: 'cacheFirst',
// 				options: {
// 					cacheName: 'google-fonts'
// 				}
// 			}
// 		]
// 	}),
// ]