const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function(e){
    e.preventDefault();
    clearError();
    let valid = true;
    if(username.value.trim()===""){
        showError(username,"Username is required");
        valid = false;
    }
    if (!email.value.includes("@")) {
    showError(email, "Enter a valid email");
    valid = false;
  }
    if(password.value.length<6){
        showError(password,"Password must be at least 6 characters");
        valid = false;
    }
    if(valid===true){
        alert("Form submitted successfully");
        form.reset();
    }
});
function showError(input,message){
    input.parentElement.querySelector(".error").innerText = message;
}
function clearError(){
    let error = document.querySelectorAll(".error")
    error.forEach(err => {
        err.innerText = ""
    });
}