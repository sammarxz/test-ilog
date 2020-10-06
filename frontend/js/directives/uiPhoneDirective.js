angular.module('webnautas').directive('uiPhone', () => {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      const _formatPhone = function (phone) {
        phone = phone.replace(/[^0-9]+/g, '');

        if (phone.length > 2) {
          phone = `(${phone.substring(0,2)}) ${phone.substring(2)}`
        }
        if (phone.length > 7) {
          phone = `${phone.substring(0,10)}-${phone.substring(10, 14)}`
        }

        return phone;
      }

      element.bind('keyup', function () {
        ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
        ctrl.$render();
      });
    }
  }
})