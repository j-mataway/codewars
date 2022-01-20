function HQ9(code) {
    if(code === 'H'){return 'Hello World!'}
    if(code === 'Q'){return code}
    if(code === '9'){
      let str = ''
      for(let i = 99; i>2; i--){
        str+=`${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottles of beer on the wall.\n`
      }
      return str + '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
    }
        
    }
    