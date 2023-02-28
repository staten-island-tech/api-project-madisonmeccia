import "../css/style.css";
import { DOMSelectors } from "./DOM.js";

const URL = "https://hp-api.onrender.com/api/characters";
let data = undefined;

function getPicture() {
  let el = DOMSelectors.name;

  data
    .filter((character) => {
      return character.name === el.value;
    })

    .forEach((el) => {
      const imagecontainer = document.querySelector("#imagecontainer");
      if (imagecontainer) {
        imagecontainer.remove();
      }
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div id="imagecontainer">

<img class="img" src="${el.image}" 
.forEach((img)=> 
alt="pictue of selected character in Hogwarts uniform">
</div>`
      );
    });
}

//global-can be seen anywhere, local- only defined in function
async function getData(URL) {
  try {
    const response = await fetch(URL);

    if (response.status < 200 || response.status > 299) {
      console.log(response.status);

      throw error(response);
    } else {
      data = await response.json();
      setupSelect();
    }
  } catch (error) {
    console.log(error);
  }
}
function setupSelect() {
  const select = DOMSelectors.name;
  data.forEach((person) => {
    if (person.image && person.image !== "") {
      const option = document.createElement("option");
      option.text = person.name;
      select.add(option);
    }
  });
}
DOMSelectors.btn.addEventListener("click", function () {
  getPicture();
});
getData(URL);
