angular.module('webnautas').directive('uiMoney', () => {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      const _formatMoney = function (money) {
        money = money.replace(/\D/g,'');
        money = (money/100).toFixed(2) + '';
        money = money.replace(".", ",");
        money = money.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        money = money.replace(/(\d)(\d{3}),/g, "$1.$2,");
        
        return money;
      }

      element.bind('keyup', function () {
        ctrl.$setViewValue(_formatMoney(ctrl.$viewValue));
        ctrl.$render();
      });
    }
  }
})