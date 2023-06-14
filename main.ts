input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.LcdInit(0)
    basic.showIcon(IconNames.Fabulous)
    I2C_LCD1602.on()
    I2C_LCD1602.BacklightOn()
    I2C_LCD1602.ShowString("fan  is on ", 0, 0)
})
input.onButtonPressed(Button.B, function () {
    I2C_LCD1602.LcdInit(0)
    basic.showIcon(IconNames.Meh)
    I2C_LCD1602.on()
    I2C_LCD1602.BacklightOn()
    I2C_LCD1602.ShowString("fan off", 0, 0)
})
