import "../CSS/video-block.css";

document.querySelector("#video-block").innerHTML = `
<div id="skip_button_div">
  <button id="skip_button">
    Skip
    <i class="material-icons-round" style="font-size:clamp(1vw, 1.5vw, 2vw); color:blueviolet;">skip_next</i>
  </button>
</div>

<div id="video_title_div">
  <h4 id="video_title">Video Title</h4>
</div>

<div id="video_container">
  <video id="video" 
         class="video-js vjs-theme-sea"
         data-setup='{"controls": true, "autoplay": true, "preload": "auto"}'>
    <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
    <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
  </video>
</div>  
`;
