let userNameInput =document.getElementById("userNameInput");
let emailInput =document.getElementById("emailInput");
let passwordInput =document.getElementById("passwordInput");
let signUpBtn =document.getElementById("signUpBtn");
let alertMassage =document.getElementById("alertMassage");
let userContainer=[];
if(localStorage.getItem("users") != null){
    userContainer = JSON.parse(localStorage.getItem("users"))
}
function signUp(){
    let data={
        userName:userNameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    if(chickInputs() === true){
        getAlertMassage("All Inputs Required" , "red")
    }
    else{
        if(chickEmailExist() == true){
            getAlertMassage("Email Allready Exist" , "red")
        }
        else{
            userContainer.push(data);
            localStorage.setItem("users",JSON.stringify(userContainer));
            clearForm();
            getAlertMassage("success" , "green");
        }
   
    }

    
}
function getAlertMassage( text , color){
    alertMassage.classList.replace("d-none","d-block");
    alertMassage.innerHTML= text;
    alertMassage.style.color= color;
}
function clearForm(){
    userNameInput.value="";
    emailInput.value="";
    passwordInput.value=""
}

function chickInputs(){
    if(userNameInput.value == "" || emailInput.value =="" || passwordInput.value =="")
        return true;
    else
    return false;
}
function chickEmailExist(){
    for(let i=0 ; i< userContainer.length ; i++){
        if(userContainer[i].email == emailInput.value)
            return true ;
    }
}
signUpBtn.addEventListener("click", signUp)
console.log(userContainer)
