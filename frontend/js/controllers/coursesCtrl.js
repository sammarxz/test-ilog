angular.module('webnautas').controller('coursesCtrl', ($scope, webnautasAPI) => {
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

  $scope.showForm = false;
  $scope.loading = true;

  $scope.isSelected = function(courses) {
    return courses.some(function(course) {
      return course.selected;
    });
  }

  $scope.setShowForm = function(course) {
    if (!course) {
      $scope.showForm = !$scope.showForm;
    } else {
      course.editing = !course.editing;
    }
  }

  $scope.showCourse = function(course) {
    if (course.editing) return 'view/course/form.html'
    else return 'view/course/display.html';
  }

  $scope.orderBy = function(type) {
    $scope.direction = !$scope.direction
    $scope.order = type
  }

  $scope.addCourse = function(keyEvent, course) {
    if (keyEvent.which === 13) {
      if (course.title && course.description && course.duration) {
        webnautasAPI.addCourse(course)
        .then((response) => {
          if (response.status === 200) {
            delete $scope.course;
            $scope.showForm = !scope.showForm;
            $scope.courses.push(angular.copy(response.data));
          }
        })
        .catch(error => {
          console.error(error)
        })
      }
    }
  }

  $scope.editCourse = function(keyEvent, course) {
    if (keyEvent.which === 13) {
      delete course.editing;
      webnautasAPI.updateUser(course)
      .then((response) => {
        if (response.status === 200) {
          course.editing = false;
          delete $scope.course;
        }
      })
      .catch(error => {
        console.error(error)
      })
    }
  }

  $scope.removeCourses = function(courses) {
    const selectedCourses = courses.filter((course) => {
      if (course.selected) return course;
    });
    selectedCourses.map(function(course) {
      webnautasAPI.deleteUser(course.id).then((response) => {
        if (response.status === 200) {
          $scope.courses = courses.filter((course) => {
            if (!course.selected) return course;
          });
        }
      }, function(response) {
        console.error('error', response);
      });
    })
  }

  loadCourses();
});