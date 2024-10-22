let Input = document.querySelector(".inEmailRe");
let Button = document.querySelector(".btnSubmet");

let validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

function emailValid() {
    let Useremail = Input.value; 
    if (Useremail.match(validEmail)) {
        location.href = "https://www.w3schools.com";
        console.log("Valid");
    } else {
        console.log("Not");
    }
}


