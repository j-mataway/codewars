function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let noGeese = birds.filter(goose => !geese.includes(goose))  
    return noGeese
  };

  
//filters items included in geese array out of birds array  