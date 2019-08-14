$("#speak").click(() => {
  let voice = $("#voicelist").val();
  if (voice != "Choose Voice") {
    responsiveVoice.setDefaultVoice(voice);
  }
  let text = $("#textInput").val();
  console.log(text);
  responsiveVoice.speak(text);
});

$("#clear").click(() => {
  $("#textInput").val("");
});

$("#stop").click(() => {
  responsiveVoice.cancel();
});
