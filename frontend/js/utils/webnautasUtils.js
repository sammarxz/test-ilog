const getCall = function(callFn, type) {
  return callFn()
  .then((response) => {
    if (response.status === 200) {
      const items = response.data.map(item => ({ ...item, editing: false }));
      $scope[type] = items;
      $scope.loading = false;
    }
  })
  .catch(error => {
    console.error(error)
  })
}

const addCall = function(callFn, type) {
  console.log(callFn);
  return callFn()
  .then((response) => {
    if (response.status === 200) {
      delete $scope[type];
      $scope.showForm = !scope.showForm;
      $scope[type].push(angular.copy(response.data));
    }
  })
  .catch(error => {
    console.error(error)
  })
}

const updateCall = function(callFn, type) {
  return callFn()
  .then((response) => {
    if (response.status === 200) {
      [type].editing = false;
      delete $scope[type];
    }
  })
  .catch(error => {
    console.error(error)
  })
}

const removeCall = function(callFn, type, obj) {
  return callFn()
  .then((response) => {
    if (response.status === 200) {
      $scope[type] = obj.filter((item) => {
        if (!item.selected) return item;
      });
    }
  })
  .catch(error => {
    console.error(error)
  })
}