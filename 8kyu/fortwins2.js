function iceBrickVolume(radius, bottleLength, rimLength) {
    const height = bottleLength - rimLength
    const width = radius ** 2
    const volume = (width * height * 2)
    return volume
    }