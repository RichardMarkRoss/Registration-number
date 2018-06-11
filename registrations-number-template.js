var registration = document.querySelector('.registration');
// var theValueBox = document.querySelector(".warningLevels");
var buttonDisplayValue = document.querySelector('.buttonDisplayValue');
var displayPlate = document.querySelector(".displayPlate");
var displayCitys = document.querySelector('.DisplayCitys');
var clearButton = document.querySelector('.clearButton');
var warningLevels = document.querySelector(".warningLevels");
//handlebars setup
var templateSource = document.querySelector('.regTemplate').innerHTML;

var compileRegTemplate = Handlebars.compile(templateSource);
var insertMyData = document.querySelector('.displayPlates');


var storingTheUsers = localStorage.getItem("user2") ? JSON.parse(localStorage.getItem('user2')) : {};
var holdingTheName = RegNumber(storingTheUsers);


function radioButtonDisplay() {
    var radioButtons = document.querySelector("input[name='filter']:checked");
    if (radioButtons) {
        var filterPlaces = radioButtons.value;
        return holdingTheName.split(filterPlaces);
    } else {
        alert('select city to search');
    }
}



function separatingTheRegistration() {
    holdingTheName.split(looping);
}

buttonDisplayValue.addEventListener('click', function () {
    var registrationValue = registration.value;
    //holdingTheName.store(registrationValue);

    if (holdingTheName.store(registrationValue)) {
        localStorage.setItem('user2', JSON.stringify(holdingTheName.return()));
    }

    var RegData = {
        regList: Object.keys(holdingTheName.return())
    };

    insertMyData.innerHTML = compileRegTemplate(RegData);

});

displayCitys.addEventListener("click", function () {
    insertMyData.innerHTML = "";
    // radioButtonDisplay(compileRegTemplate(RegData));
    console.log(radioButtonDisplay())

    insertMyData.innerHTML = compileRegTemplate({regList: radioButtonDisplay()});

});

clearButton.addEventListener("click", function () {
    holdingTheName.clear();
    window.location.reload();
});

window.addEventListener('load', function () {
    var RegData = {
        regList: Object.keys(holdingTheName.getting())
    };

    insertMyData.innerHTML = compileRegTemplate(RegData);
});