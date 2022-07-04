function outed(meet, boss){
    let arrScore = [meet[boss]]
    
    for(const person in meet){
      arrScore.push(meet[person])
    }
    
    let result = arrScore.reduce((x,y)=> x+y, 0)/(arrScore.length-1)
    
    return result<=5?'Get Out Now!':'Nice Work Champ!'
  }