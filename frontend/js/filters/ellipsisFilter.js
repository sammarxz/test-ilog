angular.module('webnautas').filter('ellipsis', () => {
  return function(input, size) {
    if (input.length <= size) return input;
    const output = input.substring(0,(size)) + '...';
    return output;
  }
})