var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 15 
    let dogYears = 15
    for(i = 1; i <= humanYears; i++){
      if (i == 2){
        catYears += 9 
        dogYears += 9
      }else if(i > 2){
        catYears += 4
        dogYears += 5
      }
    }
    
    return [humanYears, catYears, dogYears];
  }