angular.module('webnautas').filter('money', () => {
  return function(money) {
    if (money) {
      return `R$ ${money}`;
    }
    return 'Grátis'
  }
})