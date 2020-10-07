angular.module('webnautas').controller('courseDetailCtrl', ($scope, $stateParams, webnautasAPI) => {
  $scope.id = $stateParams.id;

  const loadCourse = (id) => {
    webnautasAPI.getCourse(id)
    .then((response) => {
      if (response.status === 200) {
        $scope.course = response.data;
      }
    })
    .catch(error => {
      console.error(error)
    })
  }

  const loadUsers = function() {
    webnautasAPI.getUsers().then((response) => {
      if (response.status === 200) {
        const users = response.data.map(user => ({ ...user, editing: false }))
        $scope.users = users;
        $scope.loading = false;
      }
    })
    .catch(error => {
      console.error(error)
    })
  }

  $scope.addUser = function(id) {
    webnautasAPI.getUser(id)
    .then((response) => {
      if (response.status === 200) {
        $scope.course.users.push(angular.copy(response.data));
        webnautasAPI.updateCourse($scope.course)
        .then((response) => {
          if (response.status === 200) {
            // TODO: show alert message
            setShowForm();
          }
        })
        .catch(error => {
          console.error(error)
        })
      }
    })
    .catch(error => {
      console.error(error)
    })
  }

  $scope.deleteUser = function(id) {
    const users = $scope.course.users.filter((user) => (
      user.id !== id
    ));
    $scope.course.users = users;
    webnautasAPI.updateCourse($scope.course)
    .then((response) => {
      if (response.status === 200) {
        // TODO: show alert message
        console.log('ok');
      }
    })
    .catch((error) => {
      console.error(error);
    })
  }

  loadCourse($scope.id);
  loadUsers();
});