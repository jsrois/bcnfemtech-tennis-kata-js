

// puntos son las pelotas que gana cada jugador: 0, 1, 2.. 

export class TennisGame {

    constructor() {
        this.pelotasGanadasPlayer1 = 0
        this.pelotasGanadasPlayer2 = 0
    }

    calcularPuntuacion(pelotasGanadas) {
        if (pelotasGanadas <= 2) {
            return pelotasGanadas * 15
        } else {
            return 40
        }
    }

    // wonPoint(name)
    haMarcado(nombre) {
        if (nombre === "player1") {
            this.pelotasGanadasPlayer1++
        } else {
            this.pelotasGanadasPlayer2++
        }
    }


    // score
    puntuacion() {

        if (this.losDosJugadoresMarcanTresVeces()) {
            return "Deuce"
        } else if (this.pelotasGanadasPlayer1 === 4 && this.pelotasGanadasPlayer2 === 3) {
            return "Advantage for player1"
        }

        let puntuacionPlayer1 = this.calcularPuntuacion(this.pelotasGanadasPlayer1)
        let puntuacionPlayer2 = this.calcularPuntuacion(this.pelotasGanadasPlayer2)

        const marcador = `${puntuacionPlayer1}-${puntuacionPlayer2}`

        return marcador;
    }




    losDosJugadoresMarcanTresVeces() {
        return this.pelotasGanadasPlayer1 === 3 && this.pelotasGanadasPlayer2 === 3
    }
}