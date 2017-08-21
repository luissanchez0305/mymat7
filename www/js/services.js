angular.module('starter.services', [])



.factory('User', function($http, myAppConfig) {

  return {
    attemptUserLogin: function(loginData) {
        var url = myAppConfig.mainApiUrl+"login_user.php";
        return $http.post(url, {
      	    email: loginData.email,
      	    password: loginData.password
        })
    },
    attemptUserRegistration: function(userData) {
        var url = myAppConfig.mainApiUrl+"register_user.php";
        var data = {
           email: userData.email,
           gender: userData.gender,
           dateOfBirth : userData.dateOfBirth,
           pass: userData.pass,
           pass_confirm: userData.pass_confirm,
           avatarFilename: sessionStorage.avatarFilename
        };
        return $http.post(url, data);
    },
    isUserLoggedIn : function() {
        var url = myAppConfig.mainApiUrl+"check_if_user_logged.php";
        return $http.get(url);
    },
    sendPasswordReminder : function(email) {
        var url = myAppConfig.mainApiUrl+"forget_password.php?email="+email;
        return $http.get(url);
    },
    registerWithFacebook: function(email, fbid, birthday, gender) {
        var url = myAppConfig.mainApiUrl+"fb_session.php";
        var data = {
            email: email,
            fbid: fbid,
            gender: gender,
            dateOfBirth:birthday
        };
        return $http.post(url, data);
    }
  }

})



.factory('ContactForm', function($http, myAppConfig) {

  return {
      attemptSendEmail: function(emailData) {
          var url = myAppConfig.mainApiUrl+"contact_us.php";
          var data = emailData;
          return $http.post(url, data)
      }
  }

})



.factory('MyMat', function($http, myAppConfig) {

  return {
      startRoutine: function(programs) {
           console.log(programs);
           var program1Temp = programs[0].split("|");
           var program1 = program1Temp[3];
           var program2Temp = programs[1].split("|");
           var program2 = program2Temp[3];
           var program3Temp = programs[2].split("|");
           var program3 = program3Temp[3];
           var program4Temp = programs[3].split("|");
           var program4 = program4Temp[3];
           var url = myAppConfig.myMatApiUrl+"?P1="+program1+"&P2="+program2+"&P3="+program3+"&P4="+program4;
           var response = $http.get(url);
           return response;
      },
      test: function(){
          var response = $http.get(myAppConfig.myMatApiUrl);
           return response;
      }
  }

})



.factory('Program', function($http, myAppConfig, contentfulClient) {

    return {
        getProgramsInLanguage: function(language) {
            return contentfulClient.entries({
                'content_type': myAppConfig.contentfulProgramsModelId,
                'order' : 'fields.name'
                //'language' : "en"
            });
        },
        saveCurrentRoutine: function(programs) {
            var url = myAppConfig.mainApiUrl+"save_current_routine.php";
            var data = programs;
            return $http.post(url, data)
        },
        getRoutinePrograms: function() {
            
        },
        getUserFavoritePrograms: function() {
           var url = myAppConfig.mainApiUrl+"get_user_favorites.php";
           console.log('got');
           return $http.get(url);
        },
        removeFavoriteProgram: function(favId) {
           var url = myAppConfig.mainApiUrl+"remove_favorite.php?favId="+favId;
           return $http.get(url);    
        }
    }

})


