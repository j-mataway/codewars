function array(arr){
    const result = arr.split(',').slice(1, -1).join(' ')
    return result.length > 0 ? result : null
    }