import "../css/style.css";
import { DOMSelectors } from "./DOM.js";

const URL = "https://hp-api.onrender.com/api/characters";

async function getData(URL) {
  try {
    const response = await fetch(URL);

    if (response.status < 200 || response.status > 299) {
      console.log(response.status);

      throw error(response);
    } else {
      const data = await response.json();

      console.log(data);

      let name = DOMSelectors.name.value;

      data
        .filter((el) => el.name.value === "${el.name}")

        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>

<img class="img" src="${el.image}" alt="picture of Daniel Radcliff as Harry Potter">

</div>`
          );
        });
    }
  } catch (error) {
    console.log(error);
  }
}
DOMSelectors.btn.addEventListener("click", function () {
  console.log();
});

getData(URL);
