var reg = document.querySelector('.myText');
var valueBox = document.querySelector(".textBox");
var btnDisplayValue = document.querySelector('.btnDisplayValue');
var displayThePlates = document.querySelector(".displayThePlates");
var btnDisplayCity = document.querySelector('.btnDisplayCity');
var clearBtn = document.querySelector('.clearBtn');

var storedUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem('users')) : {};
var nameHolder = RegNumber(storedUsers);

function createElement(value) {

    var newLi = document.createElement('li');
    var cont = document.createTextNode(value);
    newLi.appendChild(cont);
    displayThePlates.appendChild(newLi);

}

function radioBtnDisplay() {
    var checkedRadioBtn = document.querySelector("input[name='places']:checked");
    if (checkedRadioBtn) {
        var places = checkedRadioBtn.value;
    }else{
        alert('select city to search')
    }
    return displayingTheList(nameHolder.split(places));

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

    if (nameHolder.store(regValue)) {
        createElement(regValue);
        localStorage.setItem('users', JSON.stringify(nameHolder.return()));
    }else{
        alert('please insert a value!')
    }
});

btnDisplayCity.addEventListener("click", function () {
    displayThePlates.innerHTML = "";
    radioBtnDisplay();
});

clearBtn.addEventListener("click", function () {
    nameHolder.clear();
    window.location.reload();
});

window.addEventListener('load', function () {
    nameHolder.getting();
    displayingTheList(nameHolder.list());
});