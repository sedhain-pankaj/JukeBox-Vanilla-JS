import "../CSS/search-block.css";

document.querySelector("#search-block").innerHTML = `
    <div id="search-header">
      <span>
        Search
        <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); margin-left:0.3vw; color:#004230;">content_paste_search</i>
      </span>
    </div> 

    <div id="search-select">all, karaoke</div>

    <div id="search-input">input</div>
`;

