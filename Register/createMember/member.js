let emailIn = document.querySelector(".emi");
let passIn = document.querySelector(".paw");
let warnEmail = document.querySelector(".warnEmail");
let warnPass = document.querySelector(".warnPass");

let validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
let validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

function createMem(event) {
    let EmailV = emailIn.value;
    let PasswordV = passIn.value;

    
    warnEmail.style.display = "none";
    warnPass.style.display = "none";
    emailIn.classList.remove("warn");
    passIn.classList.remove("warn");

    
    if (EmailV.match(validEmail)) {
    
        if (PasswordV.match(validPassword)) {
        
            localStorage.clear();
            localStorage.setItem("emaili", EmailV);
            localStorage.setItem("passwordi", PasswordV);
            window.location.href = "/sucessfulSign/sucess.html";
        } else {
            
            event.preventDefault();
            passIn.classList.add("warn");
            warnPass.style.display = "flex";
        }
    } else {
        event.preventDefault();
        
        
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
