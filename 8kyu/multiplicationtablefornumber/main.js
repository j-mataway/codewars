function multiTable(number) {
    let table = ''
      
      for(let i = 1; i <= 10; i++){
        if(i !== 10){
          table += `${i} * ${number} = ${i * number}\n`}
        else{table += `${i} * ${number} = ${i * number}`}
    }
      return table
    }