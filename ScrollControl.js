var doc_ScrollTarget=0,doc_ScrollCurrent=0;
var FPS=1000;
var step=2;
var friction=0.5;
var speed=10;
var bounceOff=150;
document.addEventListener("mousewheel",function(e){
    doc_ScrollTarget+=(e.wheelDelta*step);
    if(doc_ScrollTarget<(window.innerHeight-document.body.offsetHeight))
    {
        doc_ScrollTarget=(window.innerHeight-document.body.offsetHeight-bounceOff);
        window.setTimeout(function(){doc_ScrollTarget=(window.innerHeight-document.body.offsetHeight);},200);
    }
    if(doc_ScrollTarget>0)
    {
        doc_ScrollTarget=bounceOff;
        window.setTimeout(function(){doc_ScrollTarget=0;},200);
    }
},false);

window.setInterval(function(){
    doc_ScrollCurrent+=(doc_ScrollTarget-doc_ScrollCurrent)*(Math.pow(friction,2)/speed);
    document.body.style.top=doc_ScrollCurrent;
},1000/FPS);

