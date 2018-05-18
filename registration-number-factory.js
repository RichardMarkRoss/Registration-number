function RegNumber(nameKept){

var holdName = "";

function Registration(nameKept){

    if(nameKept != ""){

    if(nameKept.startsWith("CA")){
        holdName = nameKept;
        //return holdName;
    }
    return holdName;
}else{
    alert('stop');
}

}
return{
    Registration
};
}