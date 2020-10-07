angular.module('webnautas').controller('usersCtrl', ($scope, webnautasAPI) => {
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

  $scope.loading = true;

  $scope.orderBy = function(type) {
    $scope.direction = !$scope.direction
    $scope.order = type
  }

  $scope.addUser = function(keyEvent, user) {
    if (keyEvent.which === 13) {
      if (user.name && user.phone && user.address && user.admission) {
        webnautasAPI.addUser(user)
        .then((response) => {
          if (response.status === 200) {
            delete $scope.user;
            $scope.showForm = !scope.showForm;
            $scope.users.push(angular.copy(response.data));
          }
        })
        .catch(error => {
          console.error(error)
        })
      }
    }
  }

  $scope.editUser = function(keyEvent, user) {
    if (keyEvent.which === 13) {
      delete user.editing;
      webnautasAPI.updateUser(user)
      .then((response) => {
        if (response.status === 200) {
          user.editing = false;
          delete $scope.user;
        }
      })
      .catch(error => {
        console.error(error)
      })
    }
  }

  $scope.removeUsers = function(users) {
    const selectedUsers = users.filter((user) => {
      if (user.selected) return user;
    });
    selectedUsers.map(function(user) {
      webnautasAPI.deleteUser(user.id).then((response) => {
        if (response.status === 200) {
          $scope.users = users.filter((user) => {
            if (!user.selected) return user;
          });
        }
      }, function(response) {
        console.error('error', response);
      });
    })
  }

  loadUsers();
});