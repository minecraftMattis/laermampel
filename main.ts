let lautstärke = 0
basic.forever(function () {
    lautstärke = input.soundLevel()
    if (lautstärke > 160) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 220), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (lautstärke > 120) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (lautstärke > 80) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (lautstärke > 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # . . . .
            `)
    } else if (lautstärke > 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
