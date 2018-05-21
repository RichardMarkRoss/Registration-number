var valueBox = document.querySelector(".textBox");
var btnDisplayValue = document.querySelector('.btnDisplayValue');
var displayThePlates = document.querySelector(".displayThePlates");
var nameKept = valueBox.value;
var nameHolder = RegNumber(nameKept);

    function RegTheLogic(){


    displayThePlates.innerHTML = nameHolder.createElem();

}
btnDisplayValue.addEventListener('click', function(){
    RegNumber();
});