const URL = "https://colormind.io/api/";

async function getData(URL) {
  const response = await fetch(URL);
  console.log(response);
}
getData(URL);
