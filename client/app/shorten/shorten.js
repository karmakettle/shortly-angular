angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(){
   Links.addLink()
    .then(function(links){
      //links comes as an array of objects 
      // $scope.data.links = links;
      
    }).catch(function(error){
      console.error(error);
    });
  }

});
