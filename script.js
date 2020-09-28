const button = document.getElementById("add_text");
const output = document.getElementById("output");
const input = document.getElementById("input");

const maxLength = 100

function getCharodes (inputString) {
    let charCodes = [];

    for(i = 0; i <= maxLength; i++){
        if(typeof inputString[i] !== 'undefined'){
            charCodes[i] = inputString.charCodeAt(i);
        }
    }

    return(charCodes)

}

function addThreetoCharcode(charCodes){
    let convertedCodes = [];

    for(i = 0; i <= maxLength; i++){
        if(typeof charCodes[i] !== "undefined"){
            if(charCodes[i] >= 97 && charCodes[i] <= 119){
                convertedCodes[i] = charCodes[i] + 3;
            }
            else if(charCodes[i] >= 120 && charCodes[i] <= 122){
                convertedCodes[i] = charCodes[i] - 23;
            }
            else(convertedCodes[i] = charCodes[i])
        }
    }

    return(convertedCodes);
}

function convertToLetters(converterCodes){
    let message = [];
    for(i = 0; i <= maxLength; i++){
        if(typeof converterCodes[i] !== "undefined"){
            message[i] = String.fromCharCode(converterCodes[i])
        }
    }
    return(message);

}

function unsplitMessage(message){
    let unsplitMessage = "";

    for(i = 0; i <= maxLength; i++){
        if(typeof message[i] !== "undefined"){
            unsplitMessage += message[i];
        }
    }

    return(unsplitMessage);
}

function convertToCeasar (){
    const userInput = input.value.toLowerCase();

    
    const charCodes = getCharodes(userInput);
    const convertedCodes = addThreetoCharcode(charCodes);
    const message = convertToLetters(convertedCodes);
    const finaloutput = unsplitMessage(message);

    console.log(charCodes);
    console.log(convertedCodes);
    console.log(message);
    console.log(finaloutput);


    output.innerHTML = `Original Message: ${userInput} <br>
                        Converted Message: ${finaloutput}`;
}

button.addEventListener("click", convertToCeasar);

