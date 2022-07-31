function getSumOfDigits(integer) {
    var sum = null;
    var digits =  integer.toString().split('');
    sum = digits.reduce((x,y) => x+ +y, 0)
    return sum;
  }