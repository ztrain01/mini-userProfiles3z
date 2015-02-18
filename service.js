var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  var deffered = $q.defer();
  this.getUsers = function() {
    return $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response) {
      deffered.resolve(response)
    })
    return deffered.promise;
  }
});