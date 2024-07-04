let emailLoginInput =document.getElementById("emailLoginInput");
let passwordLoginInput =document.getElementById("passwordLoginInput");
let loginBtn =document.getElementById("loginBtn");
let alertMassage = document.getElementById("alertMassage");
let userContainer= [];

if(localStorage.getItem("users") !=null)
    {
        userContainer=JSON.parse(localStorage.getItem("users"))
    }
function logIn(){
    if(chickInputs() ==true){
        getAlertMassage("ALL Inputs Required" , "red")
    }
    else{
        if(check()== true){
            window.location.href = "Home.html"
              }
              else
              {
                getAlertMassage("Email or Password notCorrect","red")
              }
            }
            
    }

function check(){
    for (let index = 0; index < userContainer.length; index++) {
        if(userContainer[index].email == emailLoginInput.value && userContainer[index].password == passwordLoginInput.value)
        {
            localStorage.setItem("userName",userContainer[index].userName)
            return true;
        }
    }
}
function getAlertMassage( text , color){
    alertMassage.classList.replace("d-none","d-block");
    alertMassage.innerHTML= text;
    alertMassage.style.color= color;
}
function chickInputs(){
    if( emailLoginInput.value =="" || passwordLoginInput.value =="")
        return true;
    else
    return false;
}
loginBtn.addEventListener("click",logIn)