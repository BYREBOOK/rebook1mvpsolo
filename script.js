let cvs = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let lw = 10
let myColor= 'black'
let isMouseDown = false
let colorPicker = document.getElementById('color')
let lineW = document.getElementById('lineW')
let lineWeightValue =document.getElementById('lineWeightValue')
setInterval(() => lineWeightValue.innerHTML = lineW.value, 0)
colorPicker.addEventListener("change", function(){
    myColor =colorPicker.value
})
cvs.addEventListener('mousedown', function(){
    isMouseDown =true
})
cvs.addEventListener('mouseup', function(){
    isMouseDown =false
    ctx.beginPath()
})
cvs.addEventListener('mousemove',function(event){
    if(isMouseDown){
    ctx.fillStyle = myColor
    ctx.strokeStyle = myColor
    ctx.lineTo(event.clientX,event.clientY)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(event.clientX,event.clientY,lw/2, 0, Math.PI*2)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(event.clientX,event.clientY)
}
})
ctx.lineWidth= lw
lineW.addEventListener("change", function(){
    lw =lineW.value
    ctx.lineWidth= lw
})
cvs.width = window.innerWidth
cvs.height = window.innerHeight
function fillbtn(){
ctx.fillStyle = myColor
ctx.fillRect(0,0, cvs.width, cvs.height)
}
function clearbtn(){
    ctx.clearRect(0,0, cvs.width, cvs.height)
}
ctx.lineWidth =5
ctx.beginPath()
ctx.closePath()
ctx.fill()

let xPos = 10;
let yPos = 150;

function draw() {
    context.drawImage(black, 0, 0);
    context.drawImage(bird, xPos, yPos);
    
}

setInterval(draw, 20);


let bird = new Image()
bird.src = "img/bird.png"
let pipeBottom = new Image()
pipeBottom.src = "img/pipeBottom.png"
let back = new Image()
back.src = "img/back.png"
let pipeUp = new Image()
pipeUp.src = "img/pipeUp.png"
let road = new Image()
road.src = "img/road.png"
let fly = new Audio()
fly.src = "img/fly.mp3"
let score = new Audio()
score.src = "img/score.mp3"

let velY = 0
let gravity = 0.2
let canvas = document.getElementById("canvas")
let context = canvas.getContext ("2d")
canvas.widht = 256
canvas.height = 512
let xPos = 10
let yPos = 150
function draw() {
    context.drawImage(back, 0, 0)
    context.drawImage(bird, xPos, yPos)
if (yPos >= canvas.height) {
    location.reload()
}
velY += gravity
yPos += velY
}
setInterval(draw, 20)