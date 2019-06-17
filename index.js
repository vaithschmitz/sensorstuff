function $(x){
    return document.getElementById(x)
}


let vib = navigator.vibrate || navigator.mozVibrate;

function vibrate(){
    vib(1000)
}