function $(x){
    return document.getElementById(x)
}


window.addEventListener('userproximity', function(event) {
    if (event.near) {
      $('proximity').textContent = 'NEAR';
    } else {
      $('proximity').textContent = 'FAR';
    }
  });
