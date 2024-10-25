let EmailInput = document.querySelector(".inemail");
let PasswordInput = document.querySelector(".inpass");

let EmailStoge = localStorage.getItem("emaili");
let PassStorge = localStorage.getItem("passwordi");

function signIn(event) {
    let EmailUser = EmailInput.value;
    let PasswordUser = PasswordInput.value;

    if (EmailUser === EmailStoge && PasswordUser === PassStorge) {
        window.location.assign("/sucessfulSign/sucess.html");
    } else {
        event.preventDefault();
    }
}


function home(event) {
    window.location.assign("/index.html");
}