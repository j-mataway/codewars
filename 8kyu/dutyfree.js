function dutyFree(normPrice, discount, hol){
    let saved = normPrice * (discount/100)
    return Math.floor(hol/saved)
    }