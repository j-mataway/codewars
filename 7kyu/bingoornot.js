function bingo(a) {
    let bingoNums = [2, 9, 14, 7, 15]
    let bingoCheck = bingoNums.every(function(val) {
        return a.indexOf(val) !== -1;
    })
    return bingoCheck? 'WIN' : 'LOSE'                              
    }