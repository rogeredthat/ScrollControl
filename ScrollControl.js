var ScrollTarget=0,ScrollCurrent=0;
var FPS=1000;
var step=2;
var friction=0.5;
var speed=10;
document.addEventListener("mousewheel",function(e){
    console.log(ScrollCurrent);
    ScrollTarget+=(e.wheelDelta*step);
},false);

window.setInterval(function(){
    ScrollCurrent+=(ScrollTarget-ScrollCurrent)*(Math.pow(friction,2)/speed);
    document.body.style.top=ScrollCurrent;
},1000/FPS);