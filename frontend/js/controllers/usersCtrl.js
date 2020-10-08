angular.module('webnautas').controller('usersCtrl', ($scope, webnautasAPI, webnautasService) => {
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


  $scope.addUser = function(keyEvent, user) {
    if (keyEvent.which === 13) {
      webnautasService.addOne(user, 'user');
    }
  }

  $scope.editUser = function(keyEvent, user) {
    if (keyEvent.which === 13) {
      webnautasService.editOne(user, 'user');
    }
  }

  $scope.removeUsers = function(users) {
    webnautasService.removeOne(users, 'user');
  }

  loadUsers();
});