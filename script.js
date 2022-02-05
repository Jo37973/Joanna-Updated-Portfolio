/* TO DO */
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