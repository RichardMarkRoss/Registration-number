function RegNumber(storedUsers) {

    var namesStored =  {};
    var holdString = "";
    var separatedList = [];
    var holdingKeys = {};
    
    if(storedUsers){
        for (i = 0; i< storedUsers.length; i++){
            var regIndex = storedUsers[i]
            namesStored[regIndex] = 0;
        }

    }

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
        return namesStored;
    }

    function storingRegNumber(reg) {
        if (isValid(reg)) {
            if (namesStored[reg] == undefined) {
                namesStored[reg] = 0;
                return reg;
            }
        } else {
            return '';
        }
    }

    function filterThePlaces(places) {

        var list = Object.keys(namesStored);

        if (places === 'All') {
            return list;
        }
        var filteredList = list.filter(function (regNum) {
            return regNum.startsWith(places);

        });

        return filteredList;

    }

    function returnRegMap() {
        return namesStored;
    }

    function returnRegList() {
        return Object.keys(namesStored);
    }

    function clear() {
        namesStored = {};
        localStorage.clear();
    }

    return {
        logic: getReg,
        return: returnRegMap,
        store: storingRegNumber,
        getting: getReg,
        split: filterThePlaces,
        list: returnRegList,
        clear: clear,
        valid: isValid
    };

}