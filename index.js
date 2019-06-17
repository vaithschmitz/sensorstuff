function $(x){
    return document.getElementById(x)
}


window.addEventListener('deviceproximity', function(event) {
    $('proximity').textContent = event.value
    // console.log("An object is " + event.value + " centimeters far away");
    // console.log("Minimum distance sensor can detect is " + event.min + " centimeters");
    // console.log("Maximum distance sensor can detect is " + event.max + " centimeters");
});   

