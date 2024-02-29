let aboutButtonE1 = document.getElementById("aboutButton");
let timeToVisitButtonE1 = document.getElementById("timeToVisitButton");
let attractionsButtonE1 = document.getElementById("attractionsButton");

let aboutTabE1 = document.getElementById("aboutTab");
let timeToVisitTabE1 = document.getElementById("timeToVisitTab");
let attractionsTabE1 = document.getElementById('attractionsTab');

timeToVisitTabE1.classList.add("d-none");
attractionsTabE1.classList.add("d-none");

function onClickAboutTab() {
    aboutTabE1.classList.remove("d-none");
    timeToVisitTabE1.classList.add("d-none");
    attractionsTabE1.classList.add("d-none");
    timeToVisitButtonE1.classList.remove("selected-button");
    aboutButtonE1.classList.add("selected-button");
    attractionsButtonE1.classList.remove('selected-button');
}

function onClickTimeTovisitTab() {
    aboutTabE1.classList.add("d-none");
    timeToVisitTabE1.classList.remove("d-none");
    attractionsTabE1.classList.add("d-none");
    timeToVisitButtonE1.classList.add("selected-button");
    aboutButtonE1.classList.remove("selected-button");
    attractionsButtonE1.classList.remove('selected-button');
}

function onClickattarctionsTab() {
    aboutTabE1.classList.add("d-none");
    timeToVisitTabE1.classList.add("d-none");
    attractionsTabE1.classList.remove("d-none");
    timeToVisitButtonE1.classList.remove("selected-button");
    aboutButtonE1.classList.remove("selected-button");
    attractionsButtonE1.classList.add('selected-button');
}