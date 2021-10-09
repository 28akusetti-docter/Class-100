// var SpeechRecognition = window.webkitSpeechRecognition; 
// var recognition = new SpeechRecognition();
// function start(){
//     document.getElementById("textbox").innerHTML=""
//     recognition.start()
// }
// recognition.onresult=function(event){
//     console.log(event)
//     var content=event.results[0][0].transcript
//     document.getElementById("textbox").innerHTML=content
// }
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
 recognition.onresult = function (event) {
    console.log(event.results[0][0].transcript);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    //speak()
    if(Content == "Take my selfie."){
        console.log("takingSelfie")
        speak()
    }
} 
function speak(){
    var synth=window.speechSynthesis
    speakdata="Taking your selfie in 5 seconds"
    var utter=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utter)
    Webcam.attach(camera)
    setTimeout(
        function(){
            takeSnapshot()
            save()
        },5000
    )
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"> '
    })
}
function save(){
 link=document.getElementById("link") 
 img=document.getElementById("selfie").src  
 link.href=img
 link.click()
}