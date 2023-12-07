let eyeicon = document.getElementById("eyeicon")
let password = document.getElementById("password");

eyeicon.addEventListener('click', function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "/assets/images/show.png"
    } else {
        password.type = "password"
        eyeicon.src = "/assets/images/hide.png"
    }
})