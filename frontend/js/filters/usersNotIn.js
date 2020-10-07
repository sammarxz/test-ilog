angular.module('webnautas').filter('usersNotIn', () => {
  return function(users, courseUsers) {
    if (users && courseUsers) {
      const namesOfStudents = courseUsers.map(user => user.name);
      return users.filter(({ name }) => namesOfStudents.indexOf(name) === -1)
    }
  }
})