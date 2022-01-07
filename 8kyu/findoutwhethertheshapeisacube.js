var cubeChecker = function(volume, side){
    return volume > 0 && side > 0 ? Math.cbrt(volume) === side : false
  };