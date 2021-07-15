
import { TennisGame } from "../src/js/tennisgame";


describe("En el juego de tenis", () => {
    it("cuando marca el primer jugador, la puntuación es 15-0", () => {

        let game = new TennisGame()

        game.haMarcado("player1")

        expect(game.puntuacion()).toBe("15-0")

    })

    it("cuando marca el segundo jugador, la puntuación es 0-15", () => {
        let game = new TennisGame()

        game.haMarcado("player2")

        expect(game.puntuacion()).toBe("0-15")
    })

    it("cuando los dos jugadores anotan, la puntuación es 15-15", () => {
        let game = new TennisGame()

        game.haMarcado("player1")
        game.haMarcado("player2")

        expect(game.puntuacion()).toBe("15-15")

    })

    it ("cuando el jugador 1 anota 3 puntos .... ", () =>{
        let game = new TennisGame()

        game.haMarcado("player1")
        game.haMarcado("player1")
        game.haMarcado("player1")

        expect(game.puntuacion()).toBe("40-0")
    })

    it ("Si los dos jugadores anotan 3 puntos, Deuce ", () =>{
        let game = new TennisGame()

        game.haMarcado("player1")
        game.haMarcado("player1")
        game.haMarcado("player1")
        
        game.haMarcado("player2")
        game.haMarcado("player2")
        game.haMarcado("player2")

        expect(game.puntuacion()).toBe("Deuce")
    })

    it ("Si los jugadores están en Deuce y uno adelanta, es VENTAJA para ese jugador ", () =>{
        let game = new TennisGame()

        game.haMarcado("player1")
        game.haMarcado("player1")
        game.haMarcado("player1")
        
        game.haMarcado("player2")
        game.haMarcado("player2")
        game.haMarcado("player2")

        game.haMarcado("player1")

        expect(game.puntuacion()).toBe("Advantage for player1")
    })


})