let emailIn = document.querySelector(".emi");
let passIn = document.querySelector(".paw");
let warnEmail = document.querySelector(".we");
let warnPass = document.querySelector(".wp");
let validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

let validPassword =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;



function createMem() {
    let EmailV = emailIn.value ;
    let PasswordV = passIn.value ;


if (EmailV.match(validEmail)){

if (PasswordV.match(validPassword)) {

    localStorage.clear();

    localStorage.setItem("emaili" , EmailV);
    localStorage.setItem("passwordi" , PasswordV);
    window.Location("/sucessfulSign/sucess.html")


}else {

event.preventDefault();
passIn.classList.add("warn");
warnPass.innerHTML = " password contains at least six letters and numbers" ;
}



}
else {
    

if (PasswordV.match(validPassword)) {

event.preventDefault();
emailIn.classList.add("warn");
warnEmail.innerHTML = "Email not correct!" ;

}else {
    event.preventDefault();
    passIn.classList.add("warn");
    emailIn.classList.add("warn");
    warnPass.innerHTML = " password contains at least six letters and numbers" ;
    warnEmail.innerHTML = "Email not correct!" ;


    
}



}







}

