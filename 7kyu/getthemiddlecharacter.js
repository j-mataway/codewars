function getMiddle(s){
    let middle = ""
    if (s.length % 2 !== 0){middle = s[Math.ceil(s.length/2)-1]}
     else {middle = s[(s.length/2)-1] += s[(s.length/2)]
    
  }
return middle
}