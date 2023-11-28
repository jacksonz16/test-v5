import '../css/style.css'
import { DOMselectors } from './dom.js'
import { Merch } from './menu.js'

function toggleColors() {
    if (DOMselectors.body.classList.contains("light")) {
        DOMselectors.body.classList.remove("light");
        DOMselectors.body.classList.add("dark");
    } else if (DOMselectors.body.classList.contains("dark")) {
        DOMselectors.body.classList.remove("dark");
        DOMselectors.body.classList.add("light");
    };
};
DOMselectors.toggleButton.addEventListener("click", toggleColors);

function filterFor(array) {
    DOMselectors.menu.innerHTML = "";
    array.forEach(eva => {
        DOMselectors.menu.insertAdjacentHTML(
            "beforeend",
            `
                <div class="menu-item">
                    <img src="${eva.image}" alt="" class="item-img">
                    <h2 class="item-name">${eva.name}</h2>
                </div>
            `
        );
    });
};
filterFor(Merch);

function filterAll() {
    filterFor(Merch);
};
DOMselectors.allFilter.addEventListener("click", filterAll);

function filterShiniji() {
    const Shiniji = Merch.filter(eva => eva.Shiniji === true);
    filterFor(Shiniji);
};
DOMselectors.ShinijiFilter.addEventListener("click", filterShiniji);

function filterREI() {
    const REI = Merch.filter(eva => eva.REI === true);
    filterFor(REI);
};
DOMselectors.REIFilter.addEventListener("click", filterREI);

function filterAsuka() {
    const Asuka = Merch.filter(eva => eva.Asuka === true);
    filterFor(Asuka);
};
DOMselectors.AsukaFilter.addEventListener("click", filterAsuka);