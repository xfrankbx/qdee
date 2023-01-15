let USDistance = 0
basic.showIcon(IconNames.SmallDiamond)
basic.pause(1000)
basic.showIcon(IconNames.Diamond)
basic.pause(1000)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
qdee.qdee_Init()
basic.forever(function () {
    basic.clearScreen()
    while (true) {
        USDistance = qdee.qdee_ultrasonic(qdee.ultrasonicPort.port2)
        basic.showString("" + (USDistance))
        basic.pause(1000)
    }
})
