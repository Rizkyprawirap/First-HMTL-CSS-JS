let nameID = document.getElementById("nameID")
let phoneID = document.getElementById("phoneID")
let emailID = document.getElementById("emailID")
let addressID = document.getElementById("addressID")
let submitBtn = document.getElementById("submitBtn")


let Name, phone, email, address


function getInfo(){

    Name = nameID.value
    phone =  phoneID.value
    email = emailID.value
    address = addressID.value
    
}




function ShowPersonal(){
    return confirm(
        `
        Name: ${Name}
        Phone: ${phone}
        Email: ${email}
        Address: ${address}
    `
    )
}


function dataCorrect(){

    if(Name == false){
        alert("Name must be filled!")
        return false
    }

    if(phone == false){
        alert("Phone number must be filled!")
        return false
    }

    if(email == false){
        alert("Email must be filled!")
        return false
    }



    if(email.includes("@") == false){
        alert("Email must include '@'")
        return false
    }

    if(email.indexOf("@") != email.lastIndexOf("@")){
        alert("Email must includes only one '@'")
        return false
    }

    if(email.startsWith("@") || email.endsWith("@")){
        alert("Email must not starts or ends with '@'")
        return false
    }

    if(email.startsWith(".") || email.endsWith(".")){
        alert("Email must not starts or ends with '.'")
        return false
    }

    if(address == false){
        alert("Address must be fill")
        return false
    } 
    
    if(address.includes("Street") == false){
        alert("Address must includes 'Street'")
        return false
    }

    return true

}


function whenClick(){

    getInfo()
    if(dataCorrect() == true ){
         
        
        let isCorrect = ShowPersonal()

        if(isCorrect == true){
            alert("Purchase success")
        
        }
        else{
            alert("Purchase Failed")
        }
    }

   
}

submitBtn.addEventListener("click", 
    function(event) {
        event.preventDefault()
        whenClick()
    }

)

