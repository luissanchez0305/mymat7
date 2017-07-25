angular.module('starter.directives', [])


.directive('categorySwitcher', function() {
  
  return {
    restrict : 'A',
    
    link : function(scope, elem, attrs) {
      

      elem.on('click', function() {
          

          var indexOfEl = elem.index();
          var siblings = elem.siblings();
          angular.forEach(siblings, function(el){
             angular.element(el).addClass('opacity-50');
          })
          if(elem.hasClass('opacity-50')) {
              angular.element(elem).removeClass('opacity-50');
          } else {
             // angular.element(elem).addClass('opacity-50');
          }


      });
      
      
    }
  };

})