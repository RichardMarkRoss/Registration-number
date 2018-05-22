var reg = document.querySelector('.myText');
var valueBox = document.querySelector(".textBox");
var btnDisplayValue = document.querySelector('.btnDisplayValue');
var displayThePlates = document.querySelector(".displayThePlates");
var storedUsers = valueBox.value;

var users = localStorage.getItem("users");
var storedUsers = users ? JSON.parse(localStorage.getItem('users')) : {};
var nameHolder = RegNumber(storedUsers);

function CreateElem(regValue){

    var checkedRadioBtn = document.querySelector("input[name='places']:checked");
    if (checkedRadioBtn){
        var langChosen = checkedRadioBtn.value;
    }

    var newLi = document.createElement('li');
    newLi.textContent = regValue;
    displayThePlates.appendChild(newLi);

    localStorage.setItem('user', JSON.stringify(newLi));

}

btnDisplayValue.addEventListener('click', function(){
    var regValue = reg.value;
    CreateElem(regValue);
   
});