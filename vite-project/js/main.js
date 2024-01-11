import '../css/style.css'
import { DOMSelector } from '../js/dom.js'
const url = "https://rickandmortyapi.com/api/character/?name=";

async function getData(url) {
  try {
    const response = await fetch(url);
    const Data = await response.json();
    return Data.results;
  } catch (error) {
    console.log(error);
  }
}
//reminder add some error codes if there is a wrong input//
DOMSelector.searchForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const  character = DOMSelector.searchBar.value
  const URL = "https://rickandmortyapi.com/api/character/?name="+character
  getData(URL);
});

function defaultCardGenerate(filtercharacters) {
    filtercharacters.forEach((characters) => {
      DOMSelector.cards.insertAdjacentHTML(
        "beforeend",
        `<div class="card" id="${characters.name
          .toLowerCase()
          .replace(/ /g, "")}">
          <h2 class="characterName">${characters.name}</h2>
          <img src="${characters.image}" alt="${characters.name}"class="img"/>
          <div class="text">
          <h3>${characters.status}</h3>
          <h3>${characters.origin.name}</h3>
          </div>
      </div>`
      );
    });
  }

  async function main() {
    var filtercharacters = await getData(url);
    defaultCardGenerate(filtercharacters);
  }
  main();