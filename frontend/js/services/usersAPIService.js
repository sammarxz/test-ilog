angular.module('webnautas').factory('usersAPI', ($http, config) => {
  const _getUsers = () =>{
    return $http.get(`${config.baseUrl}/users`)
  }

  const _addUser = (user) => {
    return $http.post(`${config.baseUrl}/users`, user)
  }

  const _updateUser = (user) => {
    return $http.put(`${config.baseUrl}/users/${user.id}`, user)
  }

  const _deleteUser = (id) => {
    return $http.delete(`${config.baseUrl}/users/${id}`)
  }

  return {
    getUsers: _getUsers,
    addUser: _addUser,
    updateUser: _updateUser,
    deleteUser: _deleteUser
  };
})