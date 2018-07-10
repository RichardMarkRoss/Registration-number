var registration = document.querySelector('.registration');
 var theValueBox = document.querySelector(".warningLeveling");
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

function theDropDown(){
    var dropedDown = document.getElementById("placesRadio").value;   
    if (dropedDown) {
        return holdingTheName.split(dropedDown);
    } else {
        alert('select city to search');
    }
}



function separatingTheRegistration() {
    holdingTheName.split(looping);
}

buttonDisplayValue.addEventListener('click', function () {
    var registrationValue = registration.value;

    if (holdingTheName.store(registrationValue)) {
        localStorage.setItem('user2', JSON.stringify(holdingTheName.return()));
        registration.classList.remove("warning");
        theValueBox.innerHTML = "";
    }else{
        registration.classList.add("warning");
        theValueBox.innerHTML = "insert a registration-plate or correct registration-plate (e.g. CA 123, CY 123, etc.) and should not be the same.";
    }

    var RegData = {
        regList: Object.keys(holdingTheName.return())
    };

    insertMyData.innerHTML = compileRegTemplate(RegData);

});

displayCitys.addEventListener("click", function () {
    insertMyData.innerHTML = "";

    insertMyData.innerHTML = compileRegTemplate({
        regList: theDropDown()
    });

});

clearButton.addEventListener("click", function () {
    namesStored = {};
    localStorage.removeItem("user2");
    window.location.reload();
});

window.addEventListener('load', function () {
    var RegData = {
        regList: Object.keys(holdingTheName.getting())
    };

    insertMyData.innerHTML = compileRegTemplate(RegData);
});