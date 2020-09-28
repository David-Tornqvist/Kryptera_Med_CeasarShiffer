const button = document.getElementById("myButton");
const welcomeMessage = document.getElementById("welcomeMessage");

function welcome (){
    welcomeMessage.innerHTML = "Välkommen!"
}

button.addEventListener("click", welcome);