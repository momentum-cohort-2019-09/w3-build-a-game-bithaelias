const colors = {
    ship: '#D7263D',
    enemies: '#EBEBD3'
}
class Game {
    constructor(canvasId) {
        const canvas = document.getElementById(canvasId);
        this.screen = canvas.getContext('2d');
        this.size = { width: canvas.width, height: canvas.height };

        this.bodies = []
        let shipSize = {
            width: 20,
            height: 20
        }
        let shipLocation = {
            x: Math.floor(this.size.x * 0.5),
            y: this.size.y - (shipSize.height / 2) - 2
        }
        this.addBody(new Player(shipLocation, shipSize))
    }

    addBody(body) {
        this.bodies.push(body)
    }

    run() {
        this.draw()
    }
    draw(){
        for(let body of this.bodies){
            body.draw(this.screen)
        }
    }

}
class Player {
    constructor(location, size) {
        this.location = location
        this.size = size
    }
    draw() {
        screen.fillStyle = colors.ship
        screen.fillRect(this.location.x, this.location.y, this.size.width, this.size.height)
    }
}
const game = new Game('pixel-game')
game.run()