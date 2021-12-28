function barista(coffees){
    coffees.sort((a,b)=> a-b)
      
    for(let i = 1; i<coffees.length; i++){
     coffees[i] += 2+coffees[i-1]
    }
      
    return coffees.reduce((a,b)=> a+b, 0)
    }
    
    
    
    