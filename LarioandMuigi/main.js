function pipeFix(numbers){
    let end = numbers[numbers.length - 1] - numbers[0]
    let start = numbers[0]
    let result = []
    for(i = 0; i <= end; i++){
      result[i] = start + i 
    }
    return result
    }