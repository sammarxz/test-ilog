angular.module('webnautas').config(function($stateProvider) {
  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: 'templates/users.html',
    })
    .state('courses', {
      url: '/courses',
      templateUrl: 'templates/courses.html',
    })
})