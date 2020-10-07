angular.module('webnautas').directive('uiNavbar', function() {
  return {
    templateUrl: 'view/navbar.html',
    transclude: true,
    scope: {
      title: '@'
    }
  }
})