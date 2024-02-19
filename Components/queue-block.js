import "../CSS/queue-block.css";

document.querySelector("#queue-block").innerHTML = `
    <div id="queue-header">
      <span>
        Queue
        <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); margin-left:0.2vw; color:#004230;">playlist_play</i>
      </span>
    </div> 
    
    <div id="clear-queue">
      <button id="clear-button" onclick="clear_Queue()">
        Clear Queue
        <i class="material-icons-round" style="font-size:clamp(1vw, 2vw, 3vw); margin-left:0.5vw;">delete_sweep</i>
      </button>
    </div>

    <div id="queue-items"></div>

    <div id="right-side-arrow">
      <button id="scroll_up" class="scroll_up_queue" onclick="scroll_up_queue()">
        <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); position:absolute">arrow_circle_up</i>
      </button>

      <button id="scroll_down" class="scroll_down_queue" onclick="scroll_down_queue()">
        <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); position:absolute">arrow_circle_down</i>
      </button>
    </div>
`;
