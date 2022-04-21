//takes in obj gunners, checks for each gunner if they are ready('aye' or 'nay'), fires if all ayes
const cannonsReady = (gunners) => {

    for(const ready in gunners){
        if(gunners[ready] == 'nay'){
            return 'Shiver me timbers!'
        }
    }
   return 'Fire!' 
  }