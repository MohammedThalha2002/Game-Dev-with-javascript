export function drawStatusText(context, input) {
    context.font = '20px Helvetica'
    context.fillText("Key Pressed : " + input.lastKey, 20, 50)
}