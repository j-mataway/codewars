function century(year) {
    if (year.toString().slice(-2) == 00){return Number(year.toString().slice(0,-2))}
    else if(year.length < 3){return 1}
    else{return Number(year.toString().slice(0,-2))+1}  
    }


// const century = year => Math.ceil(year/100)