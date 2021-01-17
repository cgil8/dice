let Numero = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
    Numero = randint(1, 6)
    if (Numero == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (Numero == 2) {
        basic.showNumber(2)
    } else if (Numero == 3) {
        basic.showNumber(3)
    } else if (Numero == 4) {
        basic.showNumber(4)
    } else if (Numero == 5) {
        basic.showNumber(5)
    } else {
        basic.showNumber(6)
    }
})
