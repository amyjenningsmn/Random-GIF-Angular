var app = angular.module('randomGifApp', []);

app.controller('CallController', function($scope, $http){

  $scope.gif={};
  $scope.buttonClicked = false;

  $scope.getGifButton = function() {

      $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=animal&rating=pg').then(function(response){
        $scope.buttonClicked = true;
        console.log(response);
        $scope.gif = response.data.data;
      })
  }

})
