module.exports = {
	"globDirectory": "public\\",
	"globPatterns": [
		// "**/*.{html,ico,json,css}",
		// "src/images/*.{jpg,png}",
		"css/*.css",
		"css/vendor/*.css",
		"js/*.js"
	],
	"swSrc": "public/sw-base.js",
	"swDest": "public/service-worker.js",
	"globIgnores": [
		"..\\workbox-cli-config.backup.js"
	]
};
