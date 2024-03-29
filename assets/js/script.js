const eyeicon = document.getElementById("eyeicon")
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const submitBtn = document.querySelector("button");
const submitForm = document.querySelector("form");
const divLogin = document.querySelector(".div-login ");
const inputLogin = document.querySelectorAll(".input-login");


const user_email= "example@email.com";
const user_password = "randompassword";

function displayLogged(){
    divLogin.remove();
    document.querySelector('.wrapper').innerHTML = `
        <div class="div-logged">
            <h2>Welcome back!</h2>
            <h3>You are logged </h3>
        </div>`;
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

function formDefault(){
    hiddenPasswordDefault();
    submitBtn.classList.remove('is-active')
    submitBtn.disabled = true;
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
            submitBtn.classList.add('is-active');
            submitBtn.disabled = false;
        } else {
            submitBtn.classList.remove('is-active');
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
        formDefault();
    }
})