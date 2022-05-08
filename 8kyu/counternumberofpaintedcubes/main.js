var countSquares = function(cuts){
    return cuts === 0 ? 1 : ((cuts+1)**3 - (cuts-1)**3)
    }