input.onButtonPressed(Button.A, function () {
    rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    rope += 0.1
})
let rope = 0
basic.showLeds(`
    # # . # #
    # . . # .
    # # . # #
    . # . . #
    # # . # #
    `)
