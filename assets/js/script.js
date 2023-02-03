const cursor = document.querySelector(".cursor");
const cursorS = document.querySelector(".cursorS");
var timeout;

var progressbar = document.querySelector(".progressbar")
var scrollpath = document.querySelector(".scrollpath")
var percent = document.querySelector(".percent")



var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  var progress = (window.pageYOffset / totalHeight)*100;
  progressbar.style.height = progress + "%";
  percent.innerHTML = Math.round(progress)+ "%";
}

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  cursorS.style.transform = 'translate3d('+ (x-20) + 'px, '+ (y-20) + 'px,0)'
  cursorS.style.display = "block";

  //cursor effects when mouse stopped
  function mouseStopped(){
    cursor.style.display = "none";
    cursorS.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
  cursorS.style.display = "none";
});
function show_menu() {
  $('#show_menuitems').addClass('active');
}

function hide_menu() {
  $('#show_menuitems').removeClass('active');
}
// --------------------------------------
$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true
  });
});

// --------------------------------------
