const eyeicon = document.getElementById("eyeicon")
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const submitBtn = document.querySelector("button");
const submitForm = document.querySelector("form");
const divLogin = document.querySelector(".div-login ");
const inputLogin = document.querySelectorAll(".input-login");
const wrapper = document.querySelector(".wrapper");
const signUpBtn = document.querySelector(".sign-up");


const user_email= "example@email.com";
const user_password = "randompassword";


function signIn(){

}

function logOut(iconLogout, divLogged){
    iconLogout.addEventListener('click', ()=> {
        wrapper.removeChild(divLogged);
        wrapper.appendChild(divLogin)
        formDefault();
        emailInput.value = ""
        passwordInput.value = "";
    })
}

function displayLogged(){
    wrapper.innerHTML = `
        <div class="div-logged">
            <div class="logout">
                <button><span class="icon-logout"></span></button>
            </div>
            <h2>Welcome back!</h2>
            <h3>You are logged </h3>
        </div>`;
    const iconLogout = document.querySelector(".icon-logout");
    const divLogged = document.querySelector('.div-logged');
    logOut(iconLogout, divLogged);
};
    


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

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.innerHTML = `
        <div class="signup-container">
            <h2>Sign Up</h2>
            <form class="signup-form">
                <div class="input-name">
                    <div class="first-name">
                        <label for="first-name">First Name</label>
                        <input type="text" name="first-name" id="first-name" required>
                    </div>
                    <div class="last-name">
                        <label for="last-name">Last Name</label>
                        <input type="text" name="last-name" id="last-name" required>
                    </div>  
                </div>

                <div class="input-email">
                    <label for="email">E-mail</label>
                    <input type="text" name="email" id="email" required>
                </div>

                <div class="input-password">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required>
                </div>

                <div class="input-password">
                    <label for="password">Confirm your password</label>
                    <input type="password" name="password" id="password" required>
                </div>
                <button class="submit" disabled>Confirm</button>
            </form>
        <a href=""> Log In</a>

        </div>
   `
})

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