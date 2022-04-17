function openOrSenior(data){
    let output = []
    data.forEach((x, i) => {
      if (data[i][0] >= 55 && data[i][1] > 7){
      output.push("Senior")
    }else{output.push("Open")}
      })
    return(output)
      }