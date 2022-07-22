function minimumPerimeter(area) {
    let w = Math.round(Math.sqrt(area))
    let h = (area/w)
    
  
    while(Number.isInteger(h) === false){
      w = w + 1
      h = (area/w)
    }
  return w+w+h+h
  }
  