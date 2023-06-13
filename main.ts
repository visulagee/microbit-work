input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 255)
    pins.analogWritePin(AnalogPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
})
