function differenceInAges(ages){
    let youngest = Math.min(...ages)
    let oldest = Math.max(...ages)
    let difference = oldest-youngest
    return [youngest, oldest, difference]
    }
    