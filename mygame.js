const colors = {
    ship: '#D7263D',
    enemies: '#EBEBD3'
}
class Game {
    constructor(canvasId) {
        const canvas = document.getElementById(canvasId);
        this.screen = canvas.getContext('2d');
        this.gameSize = { x: canvas.width, y: canvas.height };
        this.keyboard = new Keyboarder()
        this.bodies = []
        let shipSize = {
            width: 20,
            height: 20
        }
        let shipLocation = {
            x: Math.floor(this.gameSize.x * 0.5),
            y: this.gameSize.y - (shipSize.height / 2) - 2
        }
        this.ship = new Ship(shipLocation, shipSize)
        let enemySize = {
            width: 30,
            height: 30
        }
        let enemyLocation = {

        }
        this.enemy = new Enemy(enemyLocation, enemySize)
        this.enemies = []
        this.addBody(this.ship)
        this.runningSpeed = 4
    }
    addEnemy() {
        const enemy = { x: this.size.width, y: Math.floor(Math.random() * this.size.height / 2) }
        const enemySize = { width: Math.random() * 100 + 10, height: Math.random() * 50 + 10 }
        this.addEnemy = new Enemy(enemyCenter, enemySize)
    }
    // addEnemy(enemies) {
    //     this.enemies.push(enemies)
    // }
    addBody(body) {

        this.bodies.push(body)

    }
    drawBodies() {
        console.log(this.bodies)
        for (let body of this.bodies) {
            body.draw(this.screen)
        }
    }
    run() {
        const tick = () => {
            // this.update()
            this.drawBodies()

            if (!this.gameOver) {
                window.requestAnimationFrame(tick)
            }
        }

        tick()
    }
}

class Ship {
    constructor(center, size) {
        this.center = center
        this.size = size
        this.startingY = center.y
        this.velocityY = 0
    }
    update(game) {
        this.center.y -= this.velocityY

    }
    draw(screen) {

        screen.fillStyle = colors.ship

        console.log(this.center.x)

        screen.fillRect(
            this.center.x - (this.size.width / 2),
            this.center.y - (this.size.height / 2),
            this.size.width, this.size.height)

    }
}
function bodyOnScreen(body) {
    return body.center.x > 0 - body.size.width
}
class Enemy {
    constructor(center, size) {
        this.center = center
        this.size = size
        this.safe = true
    }

    update(game) {
        this.center.y -= game.runningSpeed / 2
    }

    draw(screen) {
        screen.fillStyle = colors.enemies
        screen.fillRect(
            this.center.x - (this.size.width / 2),
            this.center.y - (this.size.height / 2),
            this.size.width, this.size.height)
    }

}

const game = new Game('pixel-game')
game.run()