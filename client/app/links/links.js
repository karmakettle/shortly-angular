angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  //JAMIE
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks()
    .then(function(links){
      //links comes as an array of objects 
      $scope.data.links = links;
      
    }).catch(function(error){
      console.error(error);
    });
  }

  $scope.getLinks();
});
