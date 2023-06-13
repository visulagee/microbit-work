basic.showIcon(IconNames.Confused)
I2C_LCD1602.LcdInit(0)
basic.pause(100)
basic.forever(function () {
    I2C_LCD1602.ShowString("Hello", 0, 0)
})
