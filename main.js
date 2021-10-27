video = "";
status = "";
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}
function setup() {
    canvas = createCanvas(480, 380);
    canvas.position(450,270);
}
function draw() {
    image(video, 0, 0, 480, 380);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHxTML = "Status: <br> Loading video and detecting objects! Please wait!!"
}
function modelLoaded() {
    console.log("MODEL LOAD ALERT: Coco SSD Model has been loaded!!");
    status = true;
    video.loop();
    video.speed(2.5);
    video.volume(1);
}
function stop(){
    objectDetector = ml5.objectDetector('cocossd', modelStopped);
    document.getElementById("status").innerHxTML = "Status: <br>  Pausing video and stopping detection of objects! Please wait!!"
}
function modelStopped() {
    console.log("MODEL STOP ALERT: Coco SSD Model has been stopped!!");
    status = false;
    video.pause();
}