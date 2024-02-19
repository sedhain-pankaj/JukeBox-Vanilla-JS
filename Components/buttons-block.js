import "../CSS/buttons-block.css";

const category_buttons_path = [
  { button_name: "50's and 60's", JSON_path_explicit: "Fifty Sixty" },
  { button_name: "70's", JSON_path_explicit: "Seventy" },
  { button_name: "80's", JSON_path_explicit: "Eighty" },
  { button_name: "90's", JSON_path_explicit: "Ninety" },
  { button_name: "2000's", JSON_path_explicit: "2000" },
  { button_name: "Latest Hits", JSON_path_explicit: "Latest Hits" },
  { button_name: "Country", JSON_path_explicit: "Country" },
  { button_name: "Karaoke", JSON_path_explicit: "Karaoke" },
  { button_name: "Special Occasion", JSON_path_explicit: "Special Occasion" },
  { button_name: "Christmas Song", JSON_path_explicit: "Christmas Song" },
];

document.querySelector("#buttons-block").innerHTML = `
<span class="span-heading">Shuffle:</span>

<button class="button-randomizer" style="margin-bottom:0.5vw;">
    <i class="material-icons-round" style="font-size:clamp(1vw, 2vw, 3vw); margin-right:1vw; color:#004230;">menu</i>
    Randomizer
    <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); margin-left:0.4vw; color:#4100f4;">change_circle</i> 
</button>

<span class="span-heading">Categories:</span>

${category_buttons_path
  .map(
    (item, index) =>
      `<button class="button-left" id="${item.JSON_path_explicit}">${item.button_name}</button>`
  )
  .join("")}

<span class="span-heading" style="margin-top:0.5vw;">YouTube:</span>

<button class="button-yt">
    <i class="material-icons-round" style="font-size:clamp(1vw, 2.5vw, 3vw); margin-right:1vw; color:brown;">smart_display</i>
    YouTube Search
</button>
`;

//click event listener to button-left
document.querySelectorAll(".button-left").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#div_img_video_loader").innerHTML = ``;

    let path;
    if (process.env.NODE_ENV === "production") {
      path = "/music/database/" + button.id + ".json";
    } else {
      path = "/public/music/database/" + button.id + ".json";
    }

    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          const { SN, fullname, shortname, path, img } = item;
          document
            .querySelector("#div_img_video_loader")
            .appendChild(document.createElement("div")).innerHTML = `
              <table style="width:99.5%">
                <tr>
                  <th style="width:5%"> ${SN}. </th>
                  <th> <img src="${img}" alt="${fullname}" loading="lazy"> </th>
                  <td> ${shortname} </td>
                  <td style="display:none;"> ${path} </td>
                </tr>  
              </table>
          `;
        });

        //click event listener to <tr> inside #div_img_video_loader
        document.querySelectorAll("#div_img_video_loader tr").forEach((tr) => {
          tr.addEventListener("click", () => {
            let shortname = tr.children[2].innerHTML;
            let img = tr.children[1].children[0].getAttribute("src");
            let path = tr.children[3].innerHTML;
            queue_array_create(shortname, img, path);
          });
        });
      })
      .catch((error) => console.error("Error:", error));
  });
});
