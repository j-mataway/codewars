function sameCase(a, b){
    if(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()){return -1}
//checks to see if both passed values are letters by comparing the upper and lower cases, if the upper and lower cases are the same, then it is not a letter
    else if((a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase())){return 1}
//checks to see if both letters are the smae case
   else{return 0}
 }


