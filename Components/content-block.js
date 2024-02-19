import "../CSS/content-block.css";

document.querySelector("#content-block").innerHTML = `
    <div id="div_img_video_loader">
        <h3>Click on the categories on the left side.<br>
            OR<br>
            Search songs from top-right corner.<br>
        </h3>
    </div>

    <div id="left-side-arrow">  
        <button id="scroll_up" class="scroll_up_content" onclick="scroll_up()">
            <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); position:absolute">arrow_circle_up</i>
        </button>

        <button id="scroll_down" class="scroll_down_content" onclick="scroll_down()">
            <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); position:absolute">arrow_circle_down</i> 
        </button> 
    </div>
`;

var queue_array = [];

//global function to create queue_array
window.queue_array_create = function (shortname, img, path) {
  //use a gaurd clause to check if the song is already in the queue, if it is then return
  if (queue_array.some((item) => item.path === path)) return;

  //if song is currently playing then return gaurd clause
  //if (document.querySelector("#audio_player").src === path) return;

  queue_array.push({ path });

  let table = document.createElement("table");
  table.style.width = "100%";
  document.querySelector("#queue-items").appendChild(table);

  document.querySelector("#queue-items").lastChild.innerHTML = `
        <div id="queue_img">
            <img src="${img}" alt="${shortname}" loading="lazy">

            <button id='queue_remove_button' onclick='queue_array_remove(this, "${path}")'>
                Remove <i class='material-icons-round' id='backspace'>backspace</i>
            </button>
        </div>

        <div id="queue_name">${queue_array.length}. ${shortname}</div>
    `;

  //scroll to bottom of queue-items after adding new item
  let queueItems = document.querySelector("#queue-items");
  queueItems.scrollTo({
    top: queueItems.scrollHeight,
    behavior: "smooth",
  });

  //set <source> inside the <video> element
  var source = document.createElement("source");
  source.setAttribute("src", path);
  source.setAttribute("type", "video/mp4");
  document.querySelector("#video").appendChild(source);

  // document.querySelector("#video").load();
  // document.querySelector("#video").play();
  //if video not playing then play it
  if (document.querySelector("#video").paused) {
    document.querySelector("#video").play();
  }

  //autoplay from start || run play_Queue function when first song is added to empty queue
  /*  if (queue_array.length == 1 && $("video").attr("src") == "") {
    play_Queue();
  } */
};
