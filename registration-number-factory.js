function RegNumber(storedUsers) {
//console.log(storedUsers);
    var namesStored = {};
    var holdString = "";
    var separatedList = [];
    var holdingKeys = "";
    function isValid(reg) {
        return reg.startsWith("CJ") ||
            reg.startsWith("CA") ||
            reg.startsWith("CY") ||
            reg.startsWith("CL") ||
            reg.startsWith("CAW");
    }

    function getReg() {
        if (storedUsers) {
            namesStored = storedUsers;
        }
    }

    function storingRegNumber(reg) {
        if (isValid(reg)) {
            if (namesStored[reg] == undefined) {
                namesStored[reg] = 0;
                return reg;
            }
        }
        else{
            return '';
        }
    }
    // console.log(storedUsers);

    function filterThePlaces(reg, places) {

        for (var key in namesStored) {
            if (places === "CapeTown") {
                holdingKeys = key.startsWith("CA");
                separatedList.push(holdingKeys);
            }
            if (places === "Bellville") {
                holdingKeys = key.startsWith("CY");
                separatedList.push(holdingKeys);
            }
            if (places === "Stellenbosch") {
                holdingKeys = key.startsWith("CAW");
                separatedList.push(holdingKeys);
            }
            if (places === "Paarl") {
                holdingKeys = key.startsWith("CJ");
                separatedList.push(holdingKeys);
            }
            if (places === "All") {
                holdingKeys = key;
                separatedList.push(holdingKeys);
            }
        }
        return separatedList;

    }
    
    function returnRegMap() {
        return namesStored;
    }
    function returnRegList(){
        return Object.keys(namesStored);
    }

    function clear() {
        namesStored = {};
        localStorage.clear();
    }

    return {
        RegNumber,
        logic: getReg,
        return: returnRegMap,
        store: storingRegNumber,
        getting: getReg,
        split: filterThePlaces,
        list : returnRegList
    };

}