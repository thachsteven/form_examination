var username = document.getElementById('username');
var password = document.getElementById('password');
var repassword = document.getElementById('repassword');
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');


function checkInputs() {

    var usernameValue = username.value;
    var passwordValue = password.value;
    var repasswordValue = repassword.value;
    var firstnameValue = firstname.value;
    var lastnameValue = lastname.value;
    var emailValue = email.value;
    


    // User name
    if(usernameValue.length === 0 ) {
        alert('Username field cannot be blank');
        return;
    }

    // Password
    if(passwordValue.length === 0) {
        alert('Password field cannot be blank');
        return;
    }

    // Password form 6 to 12 characters
    if(passwordValue.length < 6 || passwordValue.length > 12) {
        alert('Password field must be from 6 to 12 characters');
        return;
    }

    // Username === Password 

    if(usernameValue === passwordValue) {
        alert('Password field must be differ from the value of the Username field');
        return;
    }

    // Confirm Password

    if(repasswordValue.length === 0) {
        alert('Confirm Password cannot be blank');
        return;
    }

    // Password # Confirm Password
    if(passwordValue !== repasswordValue) {
        alert('Password and Password Confirm must be the same');
        return;
    }

    // First Name
    if(firstnameValue.length === 0) {
        alert('Full Name field cannot be blank');
        return;
    }

    // Last Name
    if(lastnameValue.length === 0) {
        alert('Last Name field cannot be blank');
        return;
    }

    //Email 
    if(emailValue.length === 0) {
        alert('Email field cannot be blank');
        return;
    }

    // Email format  xxxx@xxx.xxx 
    var emailValid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if(!(emailValue.match(emailValid))) {
        alert('The Email field must be in format  xxxx@xxx.xxx (example : abc@yahoo.com)  ');
        return;
    }

    //Successfully

    alert('Congratulation! \n Your account has been created successfully !');
    return;


}