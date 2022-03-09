function setup()
{
    video = createCapture(VIDEO);
    video.size(540,520);

    canvas = createCanvas(550,510);
    canvas.position(600,150);
   
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#FFCAED');

    textSize(distance);
    fill("black");
    text('Radika',100,100);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!!');
}

distance = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        distance = Math.floor(leftWristX - rightWristX) ; 
        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "distance = " + distance);
    }
}



