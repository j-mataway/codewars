function sc(floor){
    let scream = ''
      
    function fall(){
      for(let i = 1; i < floor; i++){
        scream += 'Aa~ '
      }return scream
    }
    
    return floor <= 1 ? scream : floor <= 6 ? fall() + 'Pa! Aa!' : fall() + 'Pa!'
  }