song="";
leftWristX="";
leftWristy="";
rightWristX="";
rughtWristy="";
function preload()
{
    song=loadSound("music.mp3");
   
}
function setup()
{
canva=createCanvas(450 , 450);
video=createCapture(VIDEO);
video.hide();
canva.position(500 , 200);

console.log(ml5.version);
poseNet= ml5.poseNet(video , modelLoaded);
poseNet.on("pose", gotPoses);

}
function draw()
{
 image(video , 0 , 0 , 450 , 450);
}
function songPlay()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1)
}
function songStop()
{
    song.stop()
}
function modelLoaded ()
{
    console.log("Model Was taking your device data (DANGER !) please do not touch the code ")
    console.log("Hey this website is very dangerous !!!!!")
}
function gotPoses (result)
{
   if (result.length > 0);
   {
      
    console.log(result); 

    leftWristX=result[0].pose.leftWrist.x;

    


   }

}