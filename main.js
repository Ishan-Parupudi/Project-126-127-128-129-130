song = "";

function preload()
{
	song = loadSound("music.mp3");


}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(400, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Initiated');
}

function gotPoses(results)
{
  if (results.length > 0)
  {
	  console.log("results");
	  leftWristX=results[0].pose.leftWrist.x;
	  leftWristy=results[0].pose.leftWrist.y;
	  console.log("Left Wrist X = " + leftWristX);
	  console.log("Left Wrist Y = " + leftWristY);

	  rightWristX=results[0].pose.rightWrist.x;
	  rightWristy=results[0].pose.rightWrist.y;
	  console.log("Right Wrist X = " + rightWristX);
	  console.log("Right Wrist Y = " + rightWristY);
  }
}

function switchMusic()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}

function draw()
{
    image(video,0,0,400,400);
}