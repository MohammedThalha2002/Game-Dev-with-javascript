export default class InputHandler {
    constructor() {
        this.lastKey = ''
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.lastKey = "PRESS Left"
                    break
                case "ArrowRight":
                    this.lastKey = "PRESS Right"
                    break

            }
        })
        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.lastKey = "RELEASE Left"
                    break
                case "ArrowRight":
                    this.lastKey = "RELEASE Right"
                    break
            }
        })
    }
}