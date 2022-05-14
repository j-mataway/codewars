function howMuchWater(water, load, clothes){
    return clothes < load ? 'Not enough clothes' : clothes > load * 2 ? 'Too much clothes': +(water * 1.1 ** (clothes-load)).toFixed(2)
   }
   