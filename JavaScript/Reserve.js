function myfunction(){
    var x;
    x=document.getElementById("quantityID").value;
    if(x.length === 0){
        alert ("Input must be filled");
        return false;
    }
    else if(x<0){
        alert("Input cannot be minus")
    }
    x=document.getElementById("color").value;
    if(x=="none"){
        alert("You need to choose a color")
        return false
    }
}
