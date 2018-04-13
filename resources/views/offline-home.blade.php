<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- favicon -->
    <link rel="manifest" href="{{ asset('site.webmanifest.json') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/favicons/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/favicons/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/favicons/favicon-16x16.png') }}">
    <link rel="mask-icon" href="{{ asset('images/favicons/safari-pinned-tab.svg') }}" color="#5bbad5">
    <link rel="shortcut icon" href="{{ asset('images/favicons/favicon.ico') }}">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="{{ asset('images/favicons/browserconfig.xml') }}">
    <meta name="theme-color" content="#ffffff">

    <!-- Scripts -->
    <script>
		window.App = {!! json_encode([
            'user' => auth()->user(),
            'signedIn' => auth()->check()
        ]) !!};
    </script>
    <style>
        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        body {
            padding-bottom: 100px;
        }

        .level {
            display: flex;
            align-items: center;
        }

        .flex {
            flex: 1;
        }

    </style>
</head>
<body>
<div id="app">
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name') }}
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    <li>
                        <a href="{{ route('home') }}">
                            Click Me To Go To Home Page If You Are Online!
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('threads.index') }}">
                            Click Me To Go To Threads Page For Latest Threads If You Are Online!
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-danger">
                            No Action Will Happend And Links Will Not Work.
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row">
            @forelse($threads as $thread)
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="level">
                                <div class="flex">
                                    <h4>
                                        <a href="#" onclick="offlineAlert()">
                                            @if(auth()->check() && $thread->hasUpdatesFor(auth()->user()))
                                                <strong>
                                                    {{ $thread->title }}
                                                </strong>
                                            @else
                                                {{ $thread->title }}
                                            @endif
                                        </a>
                                    </h4>
                                    <h5> Posted By:
                                        <a href="#" onclick="offlineAlert()"> {{ $thread->owner->name }} </a>
                                    </h5>
                                </div>
                                <span>
                                     <a href="#" onclick="offlineAlert()">
                                        {{ $thread->replies_count }} {{ str_plural('Reply', $thread->replies_count) }}
                                     </a>
                                </span>
                            </div>
                        </div>
                        <div class="panel-body">
                            {!! $thread->body !!}
                        </div>

                        <div class="panel-footer">
                            {{ $thread->visits()->count() }}
                            <span>Visits</span>
                        </div>
                    </div>
                </div>
            @empty
                <div class="col-md-8 col-md-offset-2">
                    <div class="alert alert-info text-center">No Threads Founds.</div>
                </div>
            @endforelse
        </div>
    </div>
</div>

<!-- Scripts -->
<script>
	function offlineAlert  () {
        if ('Notification' in window && 'serviceWorker' in navigator) {
            askForNotificationPermisssion();
        } else {
            showAlert();
        }
	}

	function showNotification () {

			var options = {
				body: 'You Are Offline You Can\'t Make Any Action To This Thread Write Now!',
				// not supported in all browsers but some support in devices Should Not Be Core Features
				icon: '/images/favicons/favicon-32x32.png',
				image: '/images/avatar/default.png',
				dir: 'ltr',
				lang: 'en-US', // BCP 47 Format
				vibrate: [100, 50, 200],
				badge: '/images/avatar/profile.png',
				tag: 'confirm-notification', // very important
				renotify: true, // ver important to above line
				actions: [
					{ action: 'confirm', title: 'Okay Baby', icon: '/images/favicons/favicon-32x32.png' },
					{ action: 'cancel', title: 'Cancel Baby', icon: '/images/favicons/favicon-32x32.png' },
				]
			};
            console.log('serviceWorker', navigator.serviceWorker);
			navigator.serviceWorker.ready
                .then(function (sw) {
                	console.log('sw', sw);
                    sw.showNotification('You Are Offline!', options);
                }).catch(function(error) {
				    console.log('Service worker registration failed, error:', error);
			    });
	}

	function askForNotificationPermisssion() {
		Notification.requestPermission(function (result) {
			console.log('User Choice', result);
			if (result !== 'granted') {
				console.log('No Notification Permission Granted!');
			} else {
				showNotification();
			}
		});
	}

	function showAlert () {
		alert('You Are Offline You Can\'t Make Any Action To This Thread Write Now!');
	}
</script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
