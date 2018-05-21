function RegNumber(nameKept){

    var containValue = "";
    var holdingTheKey = {};

    function TheLogicOfReg(nameKept){
        if(nameKept){
            holdingTheKey = nameKept
        }
        if (holdingTheKey != ""){
            containValue = holdingTheKey.value;
        }
        function createElem(reg){
            var newLi = document.createElement('li')
            newLi.textContent = reg;
            displayThePlates.appendChild(newLi);
        }
    }
   return{
            createElem,
    }
}