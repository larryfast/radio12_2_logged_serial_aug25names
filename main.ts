input.onButtonPressed(Button.A, function () {
    datalogger.deleteLog()
})
radio.onReceivedValue(function (name, value) {
    led.toggle(0, 0)
    datalogger.mirrorToSerial(true)
    datalogger.log(datalogger.createCV(name, value))
})
radio.setGroup(12)
basic.showIcon(IconNames.House)
datalogger.mirrorToSerial(true)
datalogger.setColumnTitles(
"tovut",
"tugog",
"zitaz",
"tataz"
)
