function datingRange(age){
    let min,
        max
    if(age<=14){
       min = Math.floor(age-(age*.1))
       max = Math.floor(age+(age*.1))
     }else{
       min = Math.floor((age/2) + 7)
       max = Math.floor((age-7) * 2)
     }
      return `${min}-${max}`
    }