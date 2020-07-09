input.onButtonPressed(Button.A, function () {
    while (nb < 10) {
        nb += 1
        basic.showString("" + (nb))
    }
})
let nb = 0
nb = 1
basic.showString("" + (nb))
basic.forever(function () {
	
})
