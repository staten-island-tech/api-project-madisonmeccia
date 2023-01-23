import "../css/style.css";
const URL = "https://api.kanye.rest";
let theme = "light";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); // makes the data into JSON object we can actually use
    document.getElementById("api-response").textContent = data.quote;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
document.querySelector(".show").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
