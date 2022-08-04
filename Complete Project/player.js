class player {
    constructor(game) {
        this.game = game
        this.width = 100
        this.height = 91.3
    }
    update() {

    }
    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}

