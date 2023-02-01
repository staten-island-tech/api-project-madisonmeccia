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
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div>

<img class="img" src="${el.image}" alt="picture of Daniel Radcliff as Harry Potter">

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
    }
  } catch (error) {
    console.log(error);
  }
}

DOMSelectors.btn.addEventListener("click", function () {
  getPicture();
});

getData(URL);

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
