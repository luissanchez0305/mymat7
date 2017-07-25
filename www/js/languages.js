angular.module('languages', [])

.constant('Languages', 
  {
  	 //english
     "en" : {
     	welcomeText: "kliknij w babel"
     },


     //german
     "de" : {
     	welcomeText: "hello !"
     }
  }

)


.run(function(Languages){

    //convert languages contasts to scope
    //$scope.translations = Languages;
    console.log('run');

})


.config(function(Languages){

    //convert languages contasts to scope
    //$scope.translations = Languages;
    console.log('config');

})