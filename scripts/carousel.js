$('.carousel').carousel({
  interval: 1000,
});

$('.dot-1').click(function () {
  $('.carousel').carousel(0)
})
$('.dot-2').click(function () {
  $('.carousel').carousel(1)
})
$('.dot-3').click(function () {
  $('.carousel').carousel(2)
})
$('.dot-4').click(function () {
  $('.carousel').carousel(3)
})
$('.dot-5').click(function () {
  $('.carousel').carousel(4)
})
$('.dot-6').click(function () {
  $('.carousel').carousel(5)
})
$('.dot-7').click(function () {
  $('.carousel').carousel(6)
})
$('.dot-8').click(function () {
  $('.carousel').carousel(7)
})

$('.testimonials-container' || '.faq-container').hover(function(){
   $(".carousel").carousel('pause');
},function(){
   $(".carousel").carousel('cycle');
});
