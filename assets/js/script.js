const eyeicon = document.getElementById("eyeicon")
const password = document.getElementById("password");
const submitBtn = document.querySelector("button");

eyeicon.addEventListener('click', function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "/assets/images/show.png"
    } else {
        password.type = "password"
        eyeicon.src = "/assets/images/hide.png"
    }
})

submitBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    document.querySelector('.div-login').remove();
    document.querySelector('.div-logged').style.setProperty("display", "flex");
})