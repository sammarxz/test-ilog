angular.module('webnautas').controller('coursesCtrl', ($scope, webnautasAPI, webnautasService) => {
  const loadCourses = function() {
    webnautasAPI.getCourses().then((response) => {
      if (response.status === 200) {
        const courses = response.data.map(course => ({ ...course, editing: false }))
        $scope.courses = courses;
        $scope.loading = false;
      }
    }, function (error){
      console.error(error);
    });
  }

  $scope.loading = true;

  $scope.addCourse = function(keyEvent, course) {
    if (keyEvent.which === 13) {
      webnautasService.addOne(course, 'course');
    }
  }

  $scope.editCourse = function(keyEvent, course) {
    if (keyEvent.which === 13) {
      webnautasService.editOne(course, 'course');
    }
  }

  $scope.removeCourses = function(courses) {
    webnautasService.removeOne(courses, 'course');
  }

  loadCourses();
});