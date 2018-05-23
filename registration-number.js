var reg = document.querySelector('.myText');
var valueBox = document.querySelector(".textBox");
var btnDisplayValue = document.querySelector('.btnDisplayValue');
var displayThePlates = document.querySelector(".displayThePlates");
var storedUsers = reg.value;

var users = localStorage.getItem("users");
var storedUsers = users ? JSON.parse(localStorage.getItem('users')) : {};
var nameHolder = RegNumber(storedUsers);

function CreateFilter(regValue){


    var checkedRadioBtn = document.querySelector("input[name='places']:checked");
    if (checkedRadioBtn){
        var places = checkedRadioBtn.value;
    }
    console.log(regValue)

    localStorage.setItem('user', JSON.stringify(newLi));

}
function createElement(value){
    var newLi = document.createElement('li');
    var cont = document.createTextNode(value);
    newLi.appendChild(cont);
    displayThePlates.appendChild(newLi);
    }

btnDisplayValue.addEventListener('click', function(){
    var regValue = reg.value;
    if(nameHolder.logic(regValue)){
        createElement(regValue);
    }
});