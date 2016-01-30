$(document).ready(function() {
  // jQuery events for Ryu
  $('.ryu').mouseenter(function() {
    // events when hover of Ryu
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    // events when move from hovering over Ryu
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  })
  .mousedown(function() {
    // events when pressing the mouse - Ryu
    $('.ryu-throwing').show();
    $('.ryu-ready').hide();
    $('.ryu-hadouken').show();
  })
  .mouseup(function() {
    // events when release mouse - Ryu
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  // jQuery events for Ken
  $('.ken').mouseenter(function() {
    // events when hover of Ken
    $('.ken-still').hide();
    $('.ken-ready').show();
  })
  .mouseleave(function() {
    // events when move from hovering over Ken
    $('.ken-still').show();
    $('.ken-ready').hide();
  })
  .mousedown(function() {
    // events when pressing the mouse - Ryu
    $('.ken-throwing').show();
    $('.ken-ready').hide();
    $('.ken-hadouken').show();
  })
  .mouseup(function() {
    // events when release mouse - Ryu
    $('.ken-throwing').hide();
    $('.ken-ready').show();
  })
});



