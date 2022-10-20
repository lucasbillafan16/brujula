let direccion = 0
basic.forever(function () {
    direccion = input.compassHeading()
    if (direccion < 22 || direccion > 337) {
        basic.showString("N")
    } else if (direccion <= 68) {
        basic.showString("NE")
    } else if (direccion <= 113) {
        basic.showString("E")
    } else if (direccion <= 157) {
        basic.showString("SE")
    } else if (direccion <= 203) {
        basic.showString("S")
    } else if (direccion <= 247) {
        basic.showString("SO")
    } else if (direccion <= 293) {
        basic.showString("O")
    } else if (direccion <= 337) {
        basic.showString("NO")
    } else {
    	
    }
})
