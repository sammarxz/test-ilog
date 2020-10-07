angular.module('webnautas').factory('webnautasAPI', ($http, config) => {
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

  const _getCourses = () =>{
    return $http.get(`${config.baseUrl}/courses`)
  }

  const _addCourse = (course) => {
    return $http.post(`${config.baseUrl}/courses`, course)
  }

  const _updateCourse = (course) => {
    return $http.put(`${config.baseUrl}/courses/${course.id}`, course)
  }

  const _deleteCourse = (id) => {
    return $http.delete(`${config.baseUrl}/courses/${id}`)
  }

  return {
    getUsers: _getUsers,
    addUser: _addUser,
    updateUser: _updateUser,
    deleteUser: _deleteUser,
    getCourses: _getCourses,
    addCourse: _addCourse,
    updateCourse: _updateCourse,
    deleteCourse: _deleteCourse
  };
})