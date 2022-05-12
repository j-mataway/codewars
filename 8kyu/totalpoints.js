function points(games) {
    let points = 0
  
    
    games.forEach(x => {
      const us = x.slice(0,1)
      const them = x.slice(2,3)
    
        if(us > them){
          points += 3
        }else if (us == them){
          points++
    }
  })  
    return points
  }