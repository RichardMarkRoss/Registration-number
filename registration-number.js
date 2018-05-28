var reg = document.querySelector('.myText');
var valueBox = document.querySelector(".textBox");
var btnDisplayValue = document.querySelector('.btnDisplayValue');
var displayThePlates = document.querySelector(".displayThePlates");
var btnDisplayCity = document.querySelector('.btnDisplayCity');

var storedUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem('users')) : {};
var nameHolder = RegNumber(storedUsers);

function createElement(value) {

    var newLi = document.createElement('li');
    var cont = document.createTextNode(value);
    newLi.appendChild(cont);
    displayThePlates.appendChild(newLi);
}

function displayingTheList(loop) {
    for (var i = 0; i < loop.length; i++) {
        createElement(loop[i]);
    }
}

function sepTheReg() {
    nameHolder.split(loop);
}
btnDisplayValue.addEventListener('click', function () {
    var regValue = reg.value;
    nameHolder.getting();
    console.log(nameHolder.return());

    if (nameHolder.store(regValue) !== '') {
        createElement(regValue);
        localStorage.setItem('users', JSON.stringify(nameHolder.return()));
    }
});

btnDisplayCity.addEventListener("click", function () {
    displayThePlates.innerHTML = "";
    nameHolder.filterThePlaces(reg, places);
});


window.addEventListener('load', function () {
    nameHolder.getting();
    displayingTheList(nameHolder.list());
});