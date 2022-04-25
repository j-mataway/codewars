function updateLight(current) {
    const light = {
      'green' : 'yellow',
      'yellow' : 'red',
      'red' : 'green'
    } 
    return light[current]
   
   }