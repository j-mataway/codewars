function roundIt(n){
    let splitNum = n.toString().split('.')
    return splitNum[0].length === splitNum[1].length ? Math.round(n) : splitNum[0].length > splitNum[1].length ? Math.floor(n) : Math.ceil(n)
    }