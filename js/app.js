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
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    // below is callback function - same with 2 above
    $('.ryu-hadouken').finish().show().animate(
      {'left': '940px'},
      500, // milliseconds for animate to take
      // below anonymous function
      function() {
        $(this).hide();
        // this - refers to ryu-hadouken
        $(this).css('left', '650px');
        }
      );
  })
  .mouseup(function() {
    // events when release mouse - Ryu
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  $(document).keydown(function(event) {
    if(event.keyCode == 88) {
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }
  });
  $(document).keyup(function(){
    $('.ryu-cool').hide();
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
    // events when pressing the mouse - Ken
    playShoryuken();
    $('.ken-ready').hide();
    $('.ken-throwing').show();
    $('.ken-hadouken').finish().show().animate(
      {'right': '860px'},
      500,
      function() {
        $(this).hide();
        $(this).css('right', '520px');
        }
      );
  })
  .mouseup(function() {
    // events when release mouse - Ken
    $('.ken-throwing').hide();
    $('.ken-ready').show();
  });
  $(document).keydown(function(event) {
    if(event.keyCode == 77) {
      $('.ken-ready').hide();
      $('.ken-cool').show();
    }
  });
  $(document).keyup(function(){
    $('.ken-cool').hide();
    $('.ken-ready').show();
  });

  function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  };

  function playShoryuken () {
    $('#shoryuken-sound')[0].volume = 0.5;
    $('#shoryuken-sound')[0].load();
    $('#shoryuken-sound')[0].play();
  };
});



