function RebondMultiples (x: number) {
    while (liste[x] < 4) {
        led.unplot(x, liste[x])
        liste[x] = liste[x] + 1
        led.plot(x, liste[x])
        basic.pause(200)
    }
    while (liste[x] > 0) {
        led.unplot(x, liste[x])
        liste[x] = liste[x] - 1
        led.plot(x, liste[x])
        basic.pause(200)
    }
}
let liste: number[] = []
let y = 0
liste = [0, 1, 2, 3, 4]
led.plot(0, 0)
basic.forever(function () {
    RebondMultiples(0)
})
basic.forever(function () {
    RebondMultiples(1)
})
basic.forever(function () {
    RebondMultiples(3)
})
basic.forever(function () {
    RebondMultiples(2)
})
basic.forever(function () {
    RebondMultiples(4)
})
