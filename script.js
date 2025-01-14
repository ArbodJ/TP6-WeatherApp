let town = document.getElementById("town");
let tempNumb = document.getElementById("tempNumb");
let city = "Medine";
const otherTown = document.getElementById("other");
otherTown.addEventListener("click", () => {
  console.log("test");
  let choiceCity = prompt("Choisissez une autre ville :");
  receiveTemp(choiceCity);
});

function receiveTemp(city) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=bd283fc9b4c44c30b3aa28557a31a414&units=metric";

  let requete = new XMLHttpRequest();
  requete.open("get", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let resp = requete.response;
        town.textContent = resp.name;
        tempNumb.textContent = resp.main.temp;
      }
    }
  };
}
