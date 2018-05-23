function RegNumber(storedUsers){

    var namesStored = {};
    var holdString = "";


    function getReg(reg){
        if(storedUsers){
            namesStored = storedUsers;
          }
        if(reg !== ''){
            console.log(reg);

    
            if(reg.startsWith("CJ")){
                if(namesStored[holdString] == undefined){
                    namesStored[holdString] = 0;
                    return true;
                }
            }
            else if(reg.startsWith("CA")){
                if(namesStored[holdString] == undefined){
                    namesStored[holdString] = 0;
                    return true;
                }
            }
            else if(reg.startsWith("CY")){
                if(namesStored[holdString] == undefined){
                    namesStored[holdString] = 0;
                    return true;
                }
            }
            else if(reg.startsWith("CL")){
                if(namesStored[holdString] == undefined){
                    namesStored[holdString] = 0;
                    return true;
                }
            }
            else if(reg.startsWith("CAW")){
                if(namesStored[holdString] == undefined){
                    namesStored[holdString] = 0;
                    return true;
            }
        }else{
            alert("insert correct number plate")
        }
        
        }else{
            return false;}
    }
    function regFunction(reg){
            if(namesStored[holdString]){
        if (places == "CapeTown"){
        
        }
        }

    }
    function returnRegMap(){
        return namesStored;
    }
    function clear(){
        namesStored = {};
        localStorage.clear();
    }

    return {
        RegNumber,
        logic : getReg,
        return : returnRegMap       
    }
}

            