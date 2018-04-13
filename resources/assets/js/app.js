/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// register service worker
//
// Check that service workers are registered
if ('serviceWorker' in navigator) {
	// Use the window load event to keep the page load performant
	window.addEventListener('load',  () => {
		navigator.serviceWorker.register('/service-worker.js');
	});
}

window.addEventListener('beforeinstallprompt',  event => {
	console.log('beforeinstallprompt fired');
	event.preventDefault();
	Vue.prototype.deferredPrompt = event;
	return false;
});

let authorizations = require('./authorization');

Vue.prototype.authorize =  (...params) => {
	if (!window.App.signedIn) return false;

	if (typeof params[ 0 ] === 'string') {
		return authorizations[ params[ 0 ] ](params[ 1 ]);
	}

	return params[ 0 ](window.App.user);
};

Vue.prototype.signedIn = window.App.signedIn;

window.events = new Vue();

window.flash =  (message, level = 'success') => {
	window.events.$emit('flash', { message, level });
};

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// components
Vue.component('flash', require('./components/Flash.vue'));
Vue.component('paginator', require('./components/Paginator.vue'));
Vue.component('user-notifications', require('./components/UserNotifications.vue'));
Vue.component('avatar-form', require('./components/AvatarForm.vue'));
Vue.component('wysiwyg', require('./components/Wysiwyg.vue'));

// pages
Vue.component('thread-view', require('./pages/Threads.vue'));

const app = new Vue({
	el: '#app',
	methods: {
		addToHomeScreen () {
			if (this.deferredPrompt) {
				// prompt
				this.deferredPrompt.prompt();
				// get user choice
				this.deferredPrompt.userChoice.then((choiceResult) => {
					console.log(choiceResult.outcome);

					if (choiceResult.outcome == 'dismissed') {
						console.log('User Cancelled Installation');
					} else {
						console.log('User Added To Home Screen');
					}
				});
				this.deferredPrompt = null;
			}
		}
	}
});
