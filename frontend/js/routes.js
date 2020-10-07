angular.module('webnautas').config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/users');

  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: 'templates/users.html',
    })
    .state('courses', {
      url: '/courses',
      templateUrl: 'templates/courses.html',
    })
    .state('coursesDetail', {
      url: '/courses/:id',
      templateUrl: 'templates/courseDetail.html'
    })
});