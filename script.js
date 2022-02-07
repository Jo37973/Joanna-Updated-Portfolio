/* Card Carousel */
$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even +')').addClass('active');
  $('.my-card:nth-child(' + $even +')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even +')').next().addClass('next');
}else {
  $('.my-card:nth-child(' + $odd +')').addClass('active');
  $('.my-card:nth-child(' + $odd +')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd +')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);

  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false,true).animate({left:'-=' + $slide});
  }else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false,true).animate({left:'+=' + $slide});
  }

  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
   
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});

// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) {// left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) {// right
    $('.active').next().trigger('click');
  }
});

// Swiping carousel
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
        } else {
            /* left swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};


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
