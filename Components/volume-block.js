import "../CSS/volume-block.css";
//import jquery slider
// import "jquery-ui";



document.querySelector("#volume-block").innerHTML = `
<div class="volume-upper-section">
  <div class="volume-digit">
      Volume:
      <span id="vol">50</span>
  </div>
  <i class="material-icons-round" id="mute">volume_up</i>
</div>

<div class="volume-lower-section">
  <button id="vol_down">
      <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); position: absolute">do_not_disturb_on</i>
  </button>
  <button id="vol_up">
      <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); position: absolute">add_circle</i>
  </button>
  <div id="slider"></div>
</div>
`;
