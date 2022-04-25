function remove (string) {  
    let newStr = string
    
    for (let i = string.length - 1; i >= 0; i--){
      if(string[i] === '!'){newStr = string.slice(0, i)
     }else {break}
      }
    return newStr;
  }