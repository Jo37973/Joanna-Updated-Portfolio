var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

  
/* Animated star*/ 
function ratestar() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf006;";
    setTimeout(function () {
        a.innerHTML = "&#xf123;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf005;";
      }, 2000);
  }
  ratestar();
  setInterval(ratestar, 3000);