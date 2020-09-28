const button = document.getElementById("add_text");
const output = document.getElementById("output");
const input = document.getElementById("input");

function welcome (){
    output.innerHTML = input.value;
}

button.addEventListener("click", welcome);