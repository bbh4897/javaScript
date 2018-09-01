var i=0;
var images = ['http://lorempixel.com/700/350/','http://lorempixel.com/700/350/','http://lorempixel.com/700/350/'];
var duration = 1000;

function sliderImg(){
    
    document.slider.src = images[i];
    if(i < images.length-1){
        i++;
    }
    else{
        i=0;
    }
    
    setTimeout("sliderImg()", duration);
    
}


window.onload = sliderImg;