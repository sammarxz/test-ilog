angular.module('webnautas').run(['$rootScope', function($rootScope) {
  $rootScope.showForm = false;
  
  $rootScope.setShowForm = function(obj) {
		if (!obj) {
      $rootScope.showForm = !$rootScope.showForm;
    } else {
      obj.editing = !obj.editing;
    }
  };

  $rootScope.isSelected = function(obj) {
    if (obj) {
      return obj.some(function(item) {
        return item.selected;
      });
    }
    return;
  }

  $rootScope.showView = function(obj, type) {
    if (obj.editing) return `view/${type}/form.html`
    else return `view/${type}/display.html`;
  }
  
  $rootScope.orderBy = function(type) {
    $rootScope.direction = !$rootScope.direction
    $rootScope.order = type
  }
}]);