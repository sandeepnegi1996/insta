console.log("hello world");

const userName = document.querySelector("#uname");
const passwordInput = document.querySelector("#password-input");
const loginButton = document.querySelector("#login-btn");


function checkDetails() {
    console.log(userName.value);
    console.log(passwordInput.value);
    if (userName.value == "root" && passwordInput.value == "toor") {
        alert("Login-Successfully");

    } else {
        alert("Wrong-Password");
    }
}


function main() {
    //add event listener to button 
    loginButton.addEventListener('click', checkDetails)

}

main();