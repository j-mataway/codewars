function isVow(a){
    let vowels = {
      97 : 'a',
      101 : 'e',
      105 : 'i',
      111 : 'o',
      117 : 'u'
    }
    
  a.forEach((char, i) =>{
    if (vowels[char])
  {a[i] = vowels[char]}})
  return a
  }
  