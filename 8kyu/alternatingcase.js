String.prototype.toAlternatingCase = function () {
    let chars = this.split('')
   
    for(i = 0; i < chars.length; i++){
      if (chars[i] === chars[i].toUpperCase()){
        chars[i] = chars[i].toLowerCase()
      }else{chars[i] = chars[i].toUpperCase()}   
  }
  return chars.join('')
}

//alternates casing on every character