console.log("testing sign up");

const UserName = document.querySelector("#uname");
const Email = document.querySelector("#email");
const PassWord = document.querySelector("#pass");
const SignUpBtn = document.querySelector("#sign-btn");

//create a function that will save all the details of the user

function saveUserDetails() {
    username = UserName.value
    email = Email.value
    password = PassWord.value

    if ((username == "root" && password == "toor") || (email == "sandy@gmail.com" && password == "toor")) {
        alert("correct user");
    } else {
        alert("wrong-user");
    }

}

function main() {
    SignUpBtn.addEventListener('click', saveUserDetails);
}
main();