function $(x){
    return document.getElementById(x)
}

window.addEventListener('deviceproximity', function(event) {
    $('proximity').textContent = event.value
  });