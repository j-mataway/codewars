function stairsIn20(s){
    return s.reduce((acc, curVal) => {
        return acc.concat(curVal)
    }, []).reduce((x,y)=> x+y, 0) * 20
    }