//setup the canvas
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// creating the player image
const playerImg = new Image()
playerImg.src = './shadow_dog.png'
const spriteWidth = 575
const spriteHeight = 523
let frameX = 0 // travels through sprite sheet horizontally
let playerState = 'idle'
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', (e) => {
    console.log(e.target.value)
    playerState = e.target.value
    console.log(playerState);
})
let gameFrame = 0
let staggerFrame = 3
const spriteAnimations = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    },
    {
        name: 'run',
        frames: 9
    },
    {
        name: 'dizzy',
        frames: 11
    },
    {
        name: 'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7
    },
    {
        name: 'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 12
    },
    {
        name: 'getHit',
        frames: 4
    },
]

const animate = () => {
    const animationTypeIndex = spriteAnimations.findIndex((animation, index) => {
        return animation.name === playerState
    })
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(playerImg, frameX * spriteWidth, animationTypeIndex * spriteHeight,
        spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    // animating

    if (gameFrame % staggerFrame == 0) {
        if (frameX < spriteAnimations[animationTypeIndex].frames - 1) {
            frameX++
        } else {
            frameX = 0
        }
    }
    gameFrame++
    requestAnimationFrame(animate)
}

animate();