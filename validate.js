export function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var eml=document.getElementById("email").value;
    var mbl=document.getElementById("mobile").value;
    let namex = /^[a-zA-Z ]{2,30}$/;  
    let emlex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let mblex = /^[0-9]{10}$/;

    if(firstName == ""){
        document.getElementById("fnameErr").innerHTML="First Name is required";
        return false;
    }

    if(namex.test(firstName) == false){
        document.getElementById("fnameErr").innerHTML="Please enter a valid name";
        return false;
    }

    if(mbl == ""){
        document.getElementById("mobileErr").innerHTML="Mobile number is required";
        return false;
    }

    if( mblex.test(mbl) == false){
        document.getElementById("mobileErr").innerHTML="Please enter a valid mobile number";
        return false; 
        }

    if(eml == ""){
        document.getElementById("emailErr").innerHTML="Email is required";
        return false; 
    }
    
    if(emlex.test(eml) == false){
    document.getElementById("emailErr").innerHTML="Please enter a valid Email address";
    return false;
    }

    return true;

}