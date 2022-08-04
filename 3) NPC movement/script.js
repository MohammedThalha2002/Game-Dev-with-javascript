/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext('2d')

CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000

let gameFrame = 0
let staggerFrame = 2

const enemy1Image = new Image()
enemy1Image.src = "./enemies/enemy1.png"

class Enemy {
    constructor() {
        this.frame = 0
        this.spriteHeight = 155
        this.spriteWidth = 293
        this.width = this.spriteWidth / 2
        this.height = this.spriteHeight / 2
        this.x = Math.random() * (CANVAS_WIDTH - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT - this.height)
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update() {
        this.x += Math.random() * 6 -3
        this.y += Math.random() * 6 -3
        if (gameFrame % this.flapSpeed === 0) {
            this.frame < 5 ? this.frame++ : this.frame = 0
        }
    }
    draw() {
        ctx.drawImage(enemy1Image,
            this.frame * this.spriteWidth, 0,
            this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width, this.height)
    }
}

const numberOfEnemies = 10
const EnemiesArray = []

for (let i = 0; i < numberOfEnemies; i++) {
    EnemiesArray.push(new Enemy())
}

const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    EnemiesArray.forEach((enemy) => {
        enemy.update()
        enemy.draw()
    })
    gameFrame++;
    requestAnimationFrame(animate)
}

animate()