input.onButtonPressed(Button.A, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . # . .
        # . . # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # . # # .
        # . . . #
        # . . # .
        # . # . .
        # . # # #
        `)
})
radio.onReceivedValue(function (name, value) {
    led.toggle(1, 0)
    datalogger.mirrorToSerial(true)
    datalogger.log(datalogger.createCV(name, value))
})
radio.setGroup(12)
basic.showLeds(`
    # . # # .
    # . . . #
    # . . # .
    # . # . .
    # . # # #
    `)
datalogger.mirrorToSerial(true)
datalogger.setColumnTitles(
"tovut",
"tugog",
"zitaz",
"tataz"
)
