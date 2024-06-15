let lautstärke = 0
basic.forever(function () {
    lautstärke = input.soundLevel()
    if (lautstärke > 100) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 220), music.PlaybackMode.UntilDone)
    }
})
