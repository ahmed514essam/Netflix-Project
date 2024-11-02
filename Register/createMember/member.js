let emailIn = document.querySelector(".emi");
let passIn = document.querySelector(".paw");
let warnEmail = document.querySelector(".warnEmail");
let warnPass = document.querySelector(".warnPass");

let validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
let validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

function createMem(event) {
    let EmailV = emailIn.value;
    let PasswordV = passIn.value;

    // Reset warnings and input borders
    warnEmail.style.display = "none";
    warnPass.style.display = "none";
    emailIn.classList.remove("warn");
    passIn.classList.remove("warn");

    // Email validation
    if (EmailV.match(validEmail)) {
        // Password validation
        if (PasswordV.match(validPassword)) {
            // Save to localStorage and redirect
            localStorage.clear();
            localStorage.setItem("emaili", EmailV);
            localStorage.setItem("passwordi", PasswordV);
            window.location.href = "/sucessfulSign/sucess.html";
        } else {
            // Show password warning
            event.preventDefault();
            passIn.classList.add("warn");
            warnPass.style.display = "flex";
        }
    } else {
        event.preventDefault();
        
        // Show warnings for both email and password if invalid
        if (!EmailV.match(validEmail)) {
            emailIn.classList.add("warn");
            warnEmail.style.display = "flex";
        }
        
        if (!PasswordV.match(validPassword)) {
            passIn.classList.add("warn");
            warnPass.style.display = "flex";
        }
    }
}
