
// Carousel init
$('.carousel').carousel({
interval: 6000, pause: "hover"})

// Gallery init
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Year init
$("#year").text(new Date().getFullYear());


// Datepicker init
$(function() {
  $('#datetimepicker').datetimepicker({
    format:`d.m.Y H:i`,
    allowTimes:[
      '07:00', '08:00', '09:00', '10:00', '12:00', '13:00',
      '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
     ]
  });
});


// Slider init
if($('.slider')) {
$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
  });
});
} 

// Lights fix
const toggler = document.querySelector(".navbar-toggler");
toggler.addEventListener("click", (e) => {
if(document.querySelector(".navbar-collapse").classList.contains("show")) {
  setTimeout(() => {
    document.querySelector(".lights").style.display = "block";
  }, 200)
  
} else {
  document.querySelector(".lights").style.display = "none";
}
});

