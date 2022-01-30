function transpose(song, interval){
    const sharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    const flat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
    let transposedNote = 0
    let transposedSong = []
    
    for(const note of song){
    if(sharp.includes(note)){
    transposedNote = sharp.indexOf(note)+interval
    }else{transposedNote = flat.indexOf(note)+interval}
    
    if (transposedNote > 11){transposedNote -= 12}
    if (transposedNote < 0){transposedNote += 12}  
    
      
    transposedSong.push(sharp[transposedNote])
    }
    return transposedSong
    }