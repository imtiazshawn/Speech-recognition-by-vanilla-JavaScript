function voice(){
    let recognition = new webkitSpeechRecognition();
    recognition.language='en-GB'
    recognition.onresult = function(event){
        console.log(event);
        document.getElementById('speechToText').value = event.results[0][0].transcript;
    }
    recognition.start();
}