function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const blueRemaining = blueStart - bluePulled,
          redRemaining = redStart - redPulled,
          totalRemaining = blueRemaining + redRemaining
    return blueRemaining/totalRemaining
}