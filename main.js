difference = ""

function setup()
{
    video = createCapture(VIDEO)
    video.size(550,500)

    canvas = createCanvas(550 , 550)
    canvas.position(560,150)

poseNet = ml5.poseNet(video , modelLoaded)
poseNet.on('pose' , gotPoses)

}

function modelLoaded()
{
    console.log('Posenet Is Initialised!')
}

function gotPoses(results)
{
if(results.length > 0)
{
leftWristX = results[0].pose.leftWrist.x
rightWristX = results[0].pose.rightWrist.x
difference = floor(leftWristX - rightWristX);
}
}

function draw()
{
    background('#ADD8E6')
    textSize(difference)
    fill("crimson")
    text('Ayaan' , 50 , 400)
}

