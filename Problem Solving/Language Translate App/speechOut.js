function textToAudio() {
    let msg = document.getElementById("output_text").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = JSON.parse(localStorage.getItem(`lang`));
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
  
    window.speechSynthesis.speak(speech);
  }