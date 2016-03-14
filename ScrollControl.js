var doc_ScrollTarget=0,doc_ScrollCurrent=0;
var FPS=1000;
var step=2;
var friction=0.5;
var speed=10;
document.addEventListener("mousewheel",function(e){
    e.preventDefault();
    doc_ScrollTarget+=(e.wheelDelta*step);
    if(doc_ScrollTarget<(window.innerHeight-document.body.offsetHeight))
    {
        doc_ScrollTarget=(window.innerHeight-document.body.offsetHeight-150);
        window.setTimeout(function(){doc_ScrollTarget=(window.innerHeight-document.body.offsetHeight);},200);
    }
    if(doc_ScrollTarget>0)
    {
        doc_ScrollTarget=150;
        window.setTimeout(function(){doc_ScrollTarget=0;},200);
    }
},false);

window.setInterval(function(){
    doc_ScrollCurrent+=(doc_ScrollTarget-doc_ScrollCurrent)*(Math.pow(friction,2)/speed);
    document.body.scrollTop=-doc_ScrollCurrent;
    
    //Vary linearly all Scrolling Controlled Elements
    for(i=0;i<ScrollControlled.length;i++){
        n=ScrollControlled[i];
        for(x in n.props)
            {
                m=(n.props[x][1]-n.props[x][0])/(n.bounds[1]-n.bounds[0]);
                if(-doc_ScrollCurrent>n.bounds[0]){
                    n.DOM.style[x]=-m*doc_ScrollCurrent+n.props[x][0];
                }
                else
                    n.DOM.style[x]=n.props[x][0];
                if(-doc_ScrollCurrent<n.bounds[1]){
                    n.DOM.style[x]=-m*doc_ScrollCurrent+n.props[x][0];
                }
                else
                    n.DOM.style[x]=n.props[x][1];
            }
    }
},1000/FPS);

element=null;

//Global Variable for Elements linked to Scroll
ScrollControlled=[];

function find(selector)
{
    elements=document.querySelectorAll(selector)
    return this;
}

function addControl(list,from,to)
{
    for(i=0;i<elements.length;i++)
    ScrollControlled.push({
        DOM:elements[i],
        props:list,
        bounds:[from,to]
    });
}