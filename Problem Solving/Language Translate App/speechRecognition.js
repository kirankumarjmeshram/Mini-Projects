let box = document.getElementById("input_text");
let button = document.getElementById("listen")

var recognizing;
var recognition = new webkitSpeechRecognition();

recognition.continous = true;
reset();
recognition.onend = reset();

recognition.onresult = function (event){
    for(var i=event.resultIndex;i<event.results.length;++i){
        if (event.results[i].isFinal) {
            Box.value += event.results[i][0].transcript;
          }
        }
      };
      
      function reset() {
        recognizing = false;
        button.innerHTML = "Click to Speak";
      }
      
      function handleTrigger() {
        if (recognizing) {
          recognition.stop();
          reset();
        } else {
          Box.value =null;
          recognition.start();
          recognizing = true;
          button.innerHTML = "Click to Stop";
        }
      }
      
    


