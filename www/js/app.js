// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
function gapAlert(message, title) {

  if(typeof navigator.notification == 'undefined') {

    alert(message);

  } else {

      navigator.notification.alert(
        message,  // message
        function(){},         // callback
        title,            // title
        "Ok"                // buttonName
    );

} 

}

function gapConfirmAlert(message, title, yesButtonLabel, noButtonLabel, onConfirm) {
    
    if(typeof navigator.notification == 'undefined') {
        var userDecision = window.confirm(translations[$translate.preferredLanguage()]['are-you-sure-program']);
        if(userDecision == true) {
            onConfirm();
        }
    } else {
        navigator.notification.confirm(
             message, // message
             onConfirm,            // callback to invoke with index of button pressed
             title,           // title
            [yesButtonLabel, noButtonLabel]         // buttonLabels
        );
    }
  
}

window.onerror = function(message, url, lineNumber) {
    console.log("Error: "+message+" in "+url+" at line "+lineNumber);
}

angular.module('starter', ['ionic', 'config', 'languages', 'starter.controllers', 'starter.services', 'starter.directives', 'ng-contentful', 'angular-svg-round-progress', 'pascalprecht.translate'])

.run(function($ionicPlatform, $translate) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    if(typeof navigator.globalization !== 'undefined'){
        navigator.globalization.getPreferredLanguage(function(language){
            alert(language.value);
            $translate.use((language.value).split('-')[0]).then(function(data){
                console.log("SUCCESS: " + data);
            }, function(data){
                console.log("ERROR: " + data);
            });
        }, null);
    }
    
  });
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider, $translateProvider, contentfulClientProvider, myAppConfig) {

  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  contentfulClientProvider.setSpaceId(myAppConfig.contentfulSpaceId); 
  contentfulClientProvider.setAccessToken(myAppConfig.contentfulAccessToken);
  $ionicConfigProvider.views.maxCache(0);



  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })


  .state('app.forgotpassword', {
    url: '/forgotpassword',
    views: {
      'menuContent': {
        templateUrl: 'templates/forgotpassword.html',
        controller: 'ForgotPasswordViewController'
      }
    }
  })
  
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'MyAccountViewController'
      }
    }
  })
  
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    controller: 'HomeViewController',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })
  
    .state('app.createaccount', {
    url: '/createaccount',
    views: {
      'menuContent': {
        templateUrl: 'templates/createaccount.html',
        controller: 'RegisterViewController'
      }
    }
  })
  

  .state('app.routines', {
    url: '/routines',
    views: {
      'menuContent': {
        templateUrl: 'templates/routines.html',
        controller: 'RoutinesViewController'
      }
        
    }
  })

  .state('app.program', {
    url: '/program',
    views: {
      'menuContent': {
        templateUrl: 'templates/program.html'
      }
    }
  })
  
  .state('app.nowplaying', {
    url: '/nowplaying',
    views: {
      'menuContent': {
        templateUrl: 'templates/nowplaying.html',
        controller: 'NowPlayingViewController'
      }
    }
  })
  
  .state('app.favorites', {
    url: '/favorites',
    views: {
      'menuContent': {
        templateUrl: 'templates/favorites.html',
        controller: 'FavoritesViewController'
      }
    }
  })
  
  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
  })
  
  .state('app.contactus', {
    url: '/contactus',
    views: {
      'menuContent': {
        templateUrl: 'templates/contactus.html',
        controller: 'ContactUsViewController'
      }
    }
  })
  
  .state('app.help', {
    url: '/help',
    views: {
      'menuContent': {
        templateUrl: 'templates/help.html'
      }
    }
  })
  
  .state('app.languages', {
    url: '/languages',
    views: {
      'menuContent': {
        templateUrl: 'templates/languages.html'
      }
    }
  })

  
  .state('app.software', {
    url: '/software',
    views: {
      'menuContent': {
        templateUrl: 'templates/software.html'
      }
    }
  })
  
  .state('app.users', {
    url: '/users',
    views: {
      'menuContent': {
        templateUrl: 'templates/users.html'
      }
    }
  })
  

      .state('app.done', {
    url: '/done',
    views: {
      'menuContent': {
        templateUrl: 'templates/done.html'
      }
    }
  })
  
      .state('app.wifi', {
    url: '/wifi',
    views: {
      'menuContent': {
        templateUrl: 'templates/wifi.html',
        controller: 'WifiScanViewController'
      }
    }
  })
  
  
  
    .state('app.1', {
    url: '/1',
    views: {
      'menuContent': {
        templateUrl: 'templates/1.html'
      }
    }
  })
  
  
      .state('app.2', {
    url: '/2',
    views: {
      'menuContent': {
        templateUrl: 'templates/2.html'
      }
    }
  })
  
  
  
      .state('app.3', {
    url: '/3',
    views: {
      'menuContent': {
        templateUrl: 'templates/3.html'
      }
    }
  }); 
    
   for(lang in translations){
		$translateProvider.translations(lang, translations[lang]);
	}
  if(localStorage.currentLang){
	  $translateProvider.preferredLanguage(localStorage.currentLang);
  }
  else {
	  $translateProvider.preferredLanguage('es');
	  localStorage.currentLang = "es";
  }
	$translateProvider.fallbackLanguage('es');
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
.constant('USER_ROLES', {
  admin: 'admin_role',
  public: 'public_role'
});
