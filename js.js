$(document).ready(function() {
  var $backTop = $(".back-top")
  $(window).on("scroll", function() {
  if ($(window).scrollTop() >= 20){
    $backTop.fadeIn();
  }else{
    $backTop.fadeOut();
  }
  });
  $backTop.on("click", function(){
    $("html,body").animate({scrollTop:0}, 900)
  });

  $('#myScrollspy').on('activate.bs.scrollspy', function () {

})
  $('[data-toggle="popover"]').popover({
    trigger: 'click'
  });
  $("#phnnmb").click(function() {
    $(".popover").popover('hide');
  });
  $("#maillmy").click(function() {
    $(".popover").popover('hide');
  });
  $(".wdw").click(function() {
    $(".popover").popover('hide');
  });
});
