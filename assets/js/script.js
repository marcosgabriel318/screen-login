const eyeicon = document.getElementById("eyeicon")
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const submitBtn = document.querySelector("button");
const submitForm = document.querySelector("form");
const inputLogin = document.querySelectorAll(".input-login");


const user_email= "example@email.com";
const user_password = "randompassword";

function displayLogged(){
    document.querySelector('.div-login').remove();
    document.querySelector('.div-logged').style.setProperty("display", "flex");
}

function displayIncorrectCredentials(){
    const element = document.createElement("span");
    element.innerHTML = "Incorrect Credentials. Type again!"
    element.classList.add("incorrect-credentials");
    divLogin.appendChild(element);
    setTimeout(()=>{
        divLogin.removeChild(element);
    }, 3000)
}

function hiddenPasswordDefault(){
    password.type = "password";
    eyeicon.src = "/assets/images/hide.png"
}

eyeicon.addEventListener('click', () => {
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "/assets/images/show.png"
    } else {
        hiddenPasswordDefault();
    }
})

emailInput.addEventListener('input', () =>{
    passwordInput.addEventListener('input', () => {
        if(emailInput.value && passwordInput.value){
            //submitBtn.removeAttribute("disabled");
            submitBtn.classList.add('is-active');
            submitBtn.disabled = false;
        } else {
            submitBtn.classList.remove('is-active')
            submitBtn.disabled = true;
        }
    })
})

submitForm.addEventListener('submit', (event)=> {
    if (emailInput.value == user_email && passwordInput.value == user_password){
        displayLogged();
    } else {
        displayIncorrectCredentials();
        event.preventDefault();
        emailInput.value = ""
        passwordInput.value = "";
        hiddenPasswordDefault();
    }
})