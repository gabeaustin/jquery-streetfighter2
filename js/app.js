$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  });

  $('.ken').mouseenter(function() {
    $('.ken-still').hide();
    $('.ken-ready').show();
  })
  .mouseleave(function() {
    $('.ken-still').show();
    $('.ken-ready').hide();
  });
});