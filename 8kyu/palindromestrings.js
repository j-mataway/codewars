function isPalindrome(line) {
    return typeof line === 'number' ? line === +line.toString().split('').reverse().join(''):line === line.toString().split('').reverse().join('');
  }