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
      run(data);
    }
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
function run(data) {
  const Array = Array.from(data[0]);
  console.log(Array);
}

DOMSelectors.btn.addEventListener("click", function () {
  console.log();
});
