var form = document.querySelector(".form");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var confirmPassword = document.querySelector(".confirmPassword");
var formControl = document.querySelector(".formControl");


function showFailure(input, message){
    let formControl = input.parentElement;
    formControl.classList.add("failure");
    let small = formControl.querySelector("small");
    small.innerText = message;
}


function showSuccess(input){
    let formControl = input.parentElement;
    formControl.classList.add("success");
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showFailure(input, "Email is not valid.")
    }
}

function getFieldName(input){
    return input.className.charAt(0).toUpperCase() + input.className.substr(1, input.className.length);
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim() === "")
            {
                showFailure(input, `${getFieldName(input)} is required.`)
            }
    });
}

function checkLength(input, min, max){
    if (input.value.length < min){
        showFailure(input, `${getFieldName(input)} must be atleast ${min} characters long.`);
    }
    if (input.value.length > max){
        showFailure(input, `${getFieldName(input)} cannot be greater than ${max} characters.`);
    }
    else{
        showSuccess(input);
    }
}

function comparePasswords(input){
    if (input.value !== password.value){
        showFailure(input, `check your password confirmation again!`);
    }
    else{
        showSuccess(input);
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    /*if (username.value === ""){
        showFailure(username, "username is required");
        formControl.querySelector("input").placeholder = '';
    }
    else{
        showSuccess(username);
        
    }

    if (email.value === "") {
        showFailure(email, "email is required");
        formControl.querySelector("input").placeholder = '';
    }
    else if (!isValidEmail(email.value)) {
        showFailure(email, "email is not valid.");
    }
    else {
        showSuccess(email);

    }

    if (password.value === "") {
        showFailure(password, "password is required");
        formControl.querySelector("input").placeholder = '';
    }
    else {
        showSuccess(password);

    }

    if (confirmPassword.value === "") {
        showFailure(confirmPassword, "Password confirmation is required");
        formControl.querySelector("input").placeholder = '';
    }
    else {
        showSuccess(confirmPassword);

    }*/

    checkRequired([username, email, password, confirmPassword]);
    checkLength(username, 3, 20);
    checkLength(password, 5, 15);
    checkEmail(email);
    comparePasswords(confirmPassword);
});
 
//also add that if all the inputs are correct, page reloads on its own.