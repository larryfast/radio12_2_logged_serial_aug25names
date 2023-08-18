input.onButtonPressed(Button.A, function () {
    datalogger.deleteLog()
})
radio.onReceivedValue(function (name, value) {
    led.toggle(0, 0)
    serial.writeValue(name, value)
})
radio.setGroup(12)
basic.showIcon(IconNames.House)
datalogger.setColumnTitles(
"tovut",
"tugog",
"zitaz",
"tataz",
"tugog"
)
