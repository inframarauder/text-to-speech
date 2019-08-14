let voicelist = responsiveVoice.getVoices();

let markup = "<option>Choose Voice</option>";
voicelist.forEach(voice => {
  markup += `<option>${voice.name}</option>`;
});

$(document).ready(() => {
  $("#voicelist").html(markup);
});
