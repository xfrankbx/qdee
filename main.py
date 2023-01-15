USDistance = 0
basic.show_icon(IconNames.SMALL_DIAMOND)
basic.pause(1000)
basic.show_icon(IconNames.DIAMOND)
basic.pause(1000)
basic.show_icon(IconNames.YES)
basic.pause(1000)
qdee.qdee_Init()

def on_forever():
    global USDistance
    basic.clear_screen()
    while True:
        USDistance = qdee.qdee_ultrasonic(qdee.ultrasonicPort.PORT2)
        basic.show_string("" + str((USDistance)))
        basic.pause(1000)
basic.forever(on_forever)
