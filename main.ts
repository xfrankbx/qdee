let USDistance = 0
basic.showIcon(IconNames.SmallDiamond)
basic.pause(100)
basic.showIcon(IconNames.Diamond)
basic.pause(100)
basic.showIcon(IconNames.Yes)
basic.pause(200)
qdee.qdee_Init()
basic.clearScreen()
basic.forever(function () {
    USDistance = qdee.qdee_ultrasonic(qdee.ultrasonicPort.port2)
    if (USDistance <= 15) {
        basic.showIcon(IconNames.Sad)
        qdee.qdee_setMotorSpeed(-50, 50)
    } else {
        basic.showIcon(IconNames.Happy)
        qdee.qdee_setMotorSpeed(50, 50)
    }
})
