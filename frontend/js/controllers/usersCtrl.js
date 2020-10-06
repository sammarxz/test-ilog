angular.module('webnautas').controller('usersCtrl', ($scope, usersAPI) => {
  const loadUsers = function() {
    usersAPI.getUsers().then((response) => {
      if (response.status === 200) {
        const users = response.data.map(user => ({ ...user, editing: false }))
        $scope.users = users;
        $scope.loading = false;
      }
    }, function (error){
      console.error(error);
    });
  }

  $scope.showForm = false;
  $scope.loading = true;

  $scope.isSelected = function(users) {
    return users.some(function(user) {
      return user.selected;
    });
  }

  $scope.setShowForm = function(user) {
    if (!user) {
      $scope.showForm = !$scope.showForm;
    } else {
      user.editing = !user.editing;
    }
  }

  $scope.showUser = function(user) {
    if (user.editing) return 'view/user/form.html'
    else return 'view/user/display.html';
  }

  $scope.orderBy = function(type) {
    $scope.direction = !$scope.direction
    $scope.order = type
  }

  $scope.addUser = function(keyEvent, user) {
    if (keyEvent.which === 13) {
      if (user.name && user.phone && user.address && user.admission) {
        usersAPI.addUser(user)
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
      usersAPI.updateUser(user)
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
      usersAPI.deleteUser(user.id).then((response) => {
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