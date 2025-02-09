radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("Hello!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    radio.sendNumber(2)
})
