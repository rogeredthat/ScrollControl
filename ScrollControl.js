var doc_ScrollTarget=0,doc_ScrollCurrent=0;
var FPS=1000;
var step=2;
var friction=0.5;
var speed=10;
document.addEventListener("mousewheel",function(e){
    if(doc_ScrollTarget)
    doc_ScrollTarget+=(e.wheelDelta*step);
},false);

window.setInterval(function(){
    doc_ScrollCurrent+=(doc_ScrollTarget-doc_ScrollCurrent)*(Math.pow(friction,2)/speed);
    document.body.style.top=doc_ScrollCurrent;
},1000/FPS);

