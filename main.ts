input.onButtonPressed(Button.A, function () {
    basic.showString("Fart")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Good Job")
    music.playMelody("C5 C5 C5 B B F F F ", 120)
    music.playMelody("C5 C5 B E E E E E ", 120)
    music.playMelody("F F F C5 C5 C5 C5 C5 ", 120)
    music.playMelody("C5 G G G E G C5 C5 ", 120)
    music.playMelody("A G G B C5 C5 C5 C5 ", 120)
    music.playMelody("F A C5 G D C C C ", 120)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(9)
})
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
	
})
