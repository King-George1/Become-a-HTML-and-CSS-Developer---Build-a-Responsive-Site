let formaction = document.getElementById("contactform");
let output = document.getElementById("result");

formaction.addEventListener('submit', function(e){
    e.preventDefault();
    let firstname = document.getElementById("firstname").value.trim();
    let secondname = document.getElementById("lastname").value.trim();
    let phonenumber = document.getElementById("phonenumber").value.trim();
    let username = document.getElementById("username").value.trim();
    let correctcontact = parseInt(phonenumber);
    output.innerHTML = " ";

    if(firstname.length == 0 || secondname.length == 0 || phonenumber.length == 0 || username.length == 0 ){
        output.innerHTML = "All fields are required";
    }
    else if(username.length < 8){
        output.innerHTML = "username should not be less than 8";
    }
    else if(phonenumber.length < 10){
        output.innerHTML = "Phone number is not up to 10 characters";
    }
    else if(phonenumber.length > 10){
        output.innerHTML = "Phone number has more than 10 characters";
    }
    else if(correctcontact.toString().length < 9){
        output.innerHTML = "Your phone number has incorrect character(s) in them";
    }

    else{
        window.alert("The data you submitted is \nFirstname: "+firstname+"\nLastname: "+secondname+"\nPhone Number: "+phonenumber+"\nUsername: "+username);
    }
    

    
    
}, false);