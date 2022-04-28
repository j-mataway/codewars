function howMuchILoveYou(nbPetals) {
    const response = {
        1: 'I love you',
        2: 'a little',
        3: 'a lot',
        4: 'passionately',
        5: 'madly',
        6: 'not at all'
    }
    if (nbPetals <= 6){return response[nbPetals]}
    else{return howMuchILoveYou(nbPetals - 6)}
  }