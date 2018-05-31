// const soundFile = require('../scripts/models/soundObj.js')

$(document).ready(function() {

  // var sound = new Howl({
  //   src: ['bug-buzz.webm', 'bug-buzz.mp3', 'bug-buzz.wav'],
  //   autoplay: true,
  //   loop: true,
  //   volume: 0.5,
  //   onend: function() {
  //     console.log('Finished!');
  //   }
  // });

  function bugs() {
    console.log('you got bugs!');
  }

  $(document).keydown(function(e) {
//need to load file path from db in each switch statement
    switch (e.which) {
      case 65: bugs();
          break;
      case 66:
          break;
      case 67:
          break;
      case 68:
          break;
      case 69:
          break;
      case 70:
          break;
      case 71:
          break;
      case 72:
          break;
      case 73:
          break;
      case 74:
          break;
      case 75:
          break;
      case 76:
          break;
      case 77:
          break;
      case 78:
          break;
      case 79:
          break;
      case 80:
          break;
      case 81:
          break;
      case 82:
          break;
      case 83:
          break;
      case 84:
          break;
      case 85:
          break;
      case 86:
          break;
      case 87:
          break;
      case 88:
          break;
      case 89:
          break;
      case 90:
          break;
    }
  });

//NOTE test feature with #play button
  var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../content/assets/sounds/bug-purring.wav');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

    // audioElement.addEventListener("canplay",function(){
    //     $("#length").text("Duration:" + audioElement.duration + " seconds");
    //     $("#source").text("Source:" + audioElement.src);
    //     $("#status").text("Status: Ready to play").css("color","green");
    // });
    //
    // audioElement.addEventListener("timeupdate",function(){
    //     $("#currentTime").text("Current second:" + audioElement.currentTime);
    // });
    //
    $('#play').click(function() {
        audioElement.play();
        // $("#status").text("Status: Playing");
    });

    // $('#pause').click(function() {
    //     audioElement.pause();
    //     $("#status").text("Status: Paused");
    // });
    //
    // $('#restart').click(function() {
    //     audioElement.currentTime = 0;
    // });
});
