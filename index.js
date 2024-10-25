let Input = document.querySelector(".inEmailRe");
let Button = document.querySelector(".btnSubmet");




window.onload = function() {
    // Select the form elements
    let firstForm = document.querySelector(".formStarted");
let secondForm = document.querySelector(".secondForm");

    // Check if elements are found before modifying their styles
    if (!firstForm || !secondForm) {
        console.error("Forms not found in the document.");
        return;
    }

    // Check if "email" exists in localStorage
    if (localStorage.getItem("emaili")) {
        firstForm.style.display = "none";
        secondForm.style.display = "flex";
    } else {
        firstForm.style.display = "flex";
        secondForm.style.display = "none";
    }
};


let validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

function emailValid() {
    let Useremail = Input.value; 
    if (Useremail.match(validEmail)) {
        location.href = "./Register/register.html";
        
localStorage.setItem("email" , Useremail) ;


    } else {
        
        event.preventDefault()
    }
}




