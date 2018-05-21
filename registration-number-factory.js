function RegNumber(storedUsers){

    var namesStored = storedUsers||{}

    function getReg(reg){

        if(storedUsers){
            namesStored = storedUsers;
          }
          
        if(reg != ''){
            if(reg[reg] != undefined){
                namesStored[reg] = 0
            }
        }
    }
    function returnRegMap(){
        return namesStored;
    }


}

