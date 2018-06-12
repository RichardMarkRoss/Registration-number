var reg = document.querySelector('.myText');
var valueBox = document.querySelector(".textBox");
var btnDisplayValue = document.querySelector('.btnDisplayValue');
var displayThePlates = document.querySelector(".ThePlatesDisplay");
var btnDisplayCity = document.querySelector('.btnDisplayCity');
var clearBtn = document.querySelector('.clearBtn');
var theWarning = document.querySelector(".displayTheWarning");

var storedUsers = localStorage.getItem("user1") ? JSON.parse(localStorage.getItem('user1')) : {};
var nameHolder = RegNumber(storedUsers);


function createRegNumberElem(regNumber) {
    var newLi = document.createElement('li');
    var cont = document.createTextNode(regNumber);
    newLi.appendChild(cont);
    return newLi;
}

function appendRegNumElementOnLeft(value) {
    //
    var li = createRegNumberElem(value);
    //
    displayThePlates.appendChild(li);
}



function radioBtnDisplay() {
    var checkedRadioBtn = document.querySelector("input[name='places']:checked");
    if (checkedRadioBtn) {
        var places = checkedRadioBtn.value;
    } else {
        alert('select city to search');
    }
    return displayingTheList(nameHolder.split(places));

}

function displayingTheList(loop) {
    for (var i = 0; i < loop.length; i++) {
        appendRegNumElementOnLeft(loop[i]);
    }
}

function sepTheReg() {
    nameHolder.split(loop);
}

btnDisplayValue.addEventListener('click', function () {
    var regValue = reg.value;
    if (nameHolder.getting()) {

        if (nameHolder.store(regValue)) {
            appendRegNumElementOnLeft(regValue);
            localStorage.setItem('user1', JSON.stringify(nameHolder.return()));
            reg.classList.remove("warning");
            theWarning.innerHTML = "";
        } else {
            reg.classList.add("warning");
            theWarning.innerHTML = "insert a registration-plate or correct registration-plate (e.g. CA 123, CY 123, etc.) and should not be the same.";
        }
    }
});

btnDisplayCity.addEventListener("click", function () {
    displayThePlates.innerHTML = "";
    radioBtnDisplay();
});

clearBtn.addEventListener("click", function () {
    namesStored = {};
    localStorage.removeItem("user1");
    window.location.reload();
});

window.addEventListener('load', function () {
    nameHolder.getting();
    displayingTheList(nameHolder.list());
});