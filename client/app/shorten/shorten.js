angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(){
  console.log("this is in the controller",$scope.link)

   Links.addLink($scope.link)
    .then(function(link){
      //get the link. 
      console.log('THIS IS THE LINKS', $scope.link)

      $scope.link =link;
      
    }).catch(function(error){
      console.error("THIS IS THE ERROR",error);

    });
  }

  $scope.isValidUrl = function(){
    Links.isValidUrl($scope.link.url);
  }

});
