angular.module('webnautas').service('webnautasService', function(webnautasAPI) {
  this.addOne = function(obj, type) {
    switch (type) {
      case 'course':
        if (obj.title && obj.description && obj.duration) {
          obj.users = [];
          addCall(webnautasAPI.addCourse(obj), type);
          break;
        }
        break;
      case 'user':
        if (obj.name && obj.phone && obj.address && obj.admission) {
          addCall(webnautasAPI.addUser(obj), type)
        }
        break;
      default:
        break;
    }
  }

  this.editOne = function(obj, type) {
    switch (type) {
      case 'course':
        if (obj.title && obj.description && obj.duration) {
          delete obj.editing;
          updateCall(webnautasAPI.updateCourse(obj), type)
        }
        break;
      case 'user':
        if (obj.name && obj.phone && obj.address && obj.admission) {
          delete obj.editing;
          updateCall(webnautasAPI.updateUser(obj), type)
        }
        break;
      default:
          break;
    } 
  }

  this.removeOne = function(obj, type) {
    const selecteds = obj.filter((item) => {
      if (item.selected) return item;
    });

    selecteds.map(function(item) {
      switch (type) {
        case 'course':
          delete item.editing;
          removeCall(webnautasAPI.deleteCourse(item.id), type, item);
          break;
        case 'user':
          delete item.editing;
          removeCall(webnautasAPI.deleteUser(item.id), type, item)
          break;
        default:
            break;
      }
    })
  }
})