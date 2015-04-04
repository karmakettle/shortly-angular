angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(){
   Links.addLink()
    .then(function(link){
      //get the link. 

      $scope.link =link;
      console.log($scope.link)
      
    }).catch(function(error){
      console.error(error);
    });
  }

});
