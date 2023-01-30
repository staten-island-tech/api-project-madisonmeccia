import "../css/style.css";

const DOMSelectors = {
  display: document.getElementById("display"),
  getHpButton: document.getElementById("btn"),
  HpGet: document.getElementById("selectHp"),
};

const URL = "https://hp-api.onrender.com/api/characters";

async function getData(URL) {
  DOMSelectors.display.innerHTML = "";

  if (DOMSelectors.HpGet.value === "Harry Potter") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Harry Potter")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Daniel Radcliff as Harry Potter">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.HpGet.value === "Draco Malfoy") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Draco Malfoy")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Tom Felton as draco malfoy">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.HpGet.value === "Hermione Granger") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Hermione Granger")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Emma Watson as Hermoine Granger">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.HpGet.value === "Ron Weasley") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Ron Weasley")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Rupert Grint as Ron Weasley">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.HpGet.value === "Cedric Diggory") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Cedric Diggory")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Robert Pattinson as Cedric Diggory">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.HpGet.value === "Severus Snape") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Severus Snape")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Alan Rickman as Severus Snape">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.HpGet.value === "Rubeus Hagrid") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Rubeus Hagrid")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Robbie Coltrane as Rubeus Hagrid">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.HpGet.value === "Luna Lovegood") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Luna Lovegood")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Evanna Lynch as Luna Lovegood">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.HpGet.value === "Sirius Black") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Sirius Black")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Gary Oldman as Sirius Black">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.HpGet.value === "Draco Malfoy") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.hp
        .filter((el) => el.name === "Bellatrix Lestrange")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="hpimg" src="${el.image}" alt="picture of Helena Bonham Carter as Bellatrix Lestrange">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  function getImage() {
    getData(URL);
  }

  DOMSelectors.getHpButton.addEventListener("click", getImage);
}
