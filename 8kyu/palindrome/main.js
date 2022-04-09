function isPalindrome(x) {
    let rev = x.split('').reverse().join('')
    console.log(rev)
    if (rev.toLowerCase() == x.toLowerCase()){return true}
    else{return false}
  }