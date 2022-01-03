function nextItem(xs, item) {
    var itemFound = false;
    
    for (var i of xs) {
      if (itemFound) {
        return i;
      }
  
      if (i === item) {
        itemFound = true;
      }
    }
  }