let speech=new SpeechSynthesisUtterance()
let voices=[]
let voiceSelect=document.querySelector("select")
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0]; //by default voice would be first voice we get after applying function getVoices
    voices.forEach((voice,i)=>(voiceSelect.options[i]= new Option(voice.name,i))); //there is option tag inside select tag so for each option what will be value
};
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]
});
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)
});