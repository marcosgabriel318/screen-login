const eyeicon = document.getElementById("eyeicon")
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const submitBtn = document.querySelector("button");
const divLogin = document.querySelector(".div-login");


const user_email= "example@email.com";
const user_password = "randompassword";


eyeicon.addEventListener('click', () => {
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "/assets/images/show.png"
    } else {
        password.type = "password"
        eyeicon.src = "/assets/images/hide.png"
    }
})

function displayLogged(){
    document.querySelector('.div-login').remove();
    document.querySelector('.div-logged').style.setProperty("display", "flex");
}

function displayIncorrectCredentials(){
    const element = document.createElement("span");
    element.innerHTML = "Credentials Incorrect. Type again!"
    element.classList.add("incorrect-credentials");
    divLogin.appendChild(element);
    setTimeout(()=>{
        divLogin.removeChild(element);
    }, 3000)
}

submitBtn.addEventListener('click', ()=> {
    if (emailInput.value == user_email && passwordInput.value == user_password){
        displayLogged();
    } else {
        displayIncorrectCredentials();
    }
})