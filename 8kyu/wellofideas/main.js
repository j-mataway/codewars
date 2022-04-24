function well(x){
    let count = 0
      x.forEach((ele) =>{
      ele === 'good' ? count += 1 : count = count
    })
     if(count == 0) {return 'Fail!'}
      else if (count <= 2){ return 'Publish!'}
      else {return 'I smell a series!'}
      
    }