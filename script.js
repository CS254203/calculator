const display = document.querySelector("#display-text");
const dotButton = document.querySelector("#dot-button");
let number1 = "0";
let number2 = "0";
let switchToNumber2 = 0;
let operation = "";
let result = 0;
let dot = 0;
let isZero = 0;

// press % button
function modelClick(){
    if(switchToNumber2===0){
        number1 = (number1/100);
        display.innerHTML=number1
    }
    else{
        if(number1===result){
            result = (result/100);
            number1 = result;
            display.innerHTML=result;
            result.toString().length>10?display.innerHTML="Error: Overflow":display.innerHTML= result.toString();
        }
        else{
            number2 = (number2/100);
            display.innerHTML=number2;
        }
    }
}

//press ac button
function acOnClick(){
    display.innerHTML="0";
    if(switchToNumber2===0){
        number1 = "0";
    }
    else{
        number2 = "0";
    }
}

//press c button
function clearScreen(){
    display.innerHTML="0";
    number1 = "0";
    number2 = "0";
    switchToNumber2 = 0;
}

//gets value of the button
function numberOnClick(value){
    //check if button . has been pressed
    if(display.innerHTML.includes('.') || value==='.'){
        dotButton.disabled = true;
     }
    else{
        dotButton.disabled = false;
    }
    if(result!=0 && number2==="0"){
        dotButton.disabled = false;
    }

    if(switchToNumber2===0){
        number1 +=value;
        //eliminates the initial '0' in front of string of number 1
        if(number1[0] === '0'){
            number1 = number1.slice(1, number1.length);
        }
        //stops the string from overlaping the display
        else if(number1.length>=11){
            return;
        }
        display.innerHTML=number1;
    }
    //eliminates the initial '0' in front of string of number 2
    else{
        number2 +=value;
        if(number2[0] === '0'){
            number2 = number2.slice(1, number2.length);
        }
        //stops the string from overlaping the display
        else if(number2.length>=11){
            return;
        }
        display.innerHTML=number2;
    }
}

function addButton(){
    dotButton.disabled = false;
    if(switchToNumber2 === 1 && result != 0){
        if(display.innerHTML!= result){
            number1=display.innerHTML;
            number2="0";
        }
    }
    switchToNumber2 = 1;
    operation="+";
    number2="0";
    
}

function subtractButton(){
    dotButton.disabled = false;
    if(switchToNumber2 === 1 && result != 0){
        if(display.innerHTML!= result){
            number1=display.innerHTML;
            number2="0";
        }
    }
    switchToNumber2 = 1;
    operation="-";
    number2="0";
}

function multiplyButton(){
    dotButton.disabled = false;
    if(switchToNumber2 === 1 && result != 0){
        if(display.innerHTML!= result){
            number1=display.innerHTML;
            number2="0";
        }
    }
    switchToNumber2 = 1;
    operation="*";
    number2="0";
}

function divideButton(){
    dotButton.disabled = false;
    if(switchToNumber2 === 1 && result != 0){
        if(display.innerHTML!= result){
            number1=display.innerHTML;
            number2="0";
        }
    }
    switchToNumber2 = 1;
    operation="/";
    number2="0";
}

function showResult(){
    dotButton.disabled = false;
    operate(number1,number2,operation);
    number1=result;
    number2="0";
}
function printResult(result){

    if(result=== "NaN"){
        display.innerHTML= "Error:Invalid Number";
        return;
    }
    result.toString().length>10?display.innerHTML="Error: Overflow":display.innerHTML= result.toString();
    number1 = result;
    number2="0";
}
function operate(num1,num2,operation){
    switch(operation) {
        case "+":
            result = add(num1,num2);
            printResult(result);
            break;
        case "-":
            result = subtract(num1,num2);
            printResult(result);
            break;
        case "*":
            result = multiply(num1,num2);
            printResult(result);
            break;
        case "/":
            if(num2==="0"){
                display.innerHTML="Error: Divide by 0";
                number1="0";
                number2="0";
                result="0";
                switchToNumber2 = 0;
                return;
            }
            result = divide(num1,num2);
            printResult(result);
            break;
        case "":
            printResult(result);
            break;
      }
}

function add(num1,num2){
    let addResult = (parseFloat(num1) + parseFloat(num2)).toFixed(4);
    operation="";
    return trimResult(addResult);
}

function subtract(num1,num2){
    let subtractResult =(parseFloat(num1) - parseFloat(num2)).toFixed(4);
    operation="";
    return trimResult(subtractResult);
}

function multiply(num1,num2){
    let multiplyResult = (parseFloat(num1) * parseFloat(num2)).toFixed(4);
    operation="";
    return trimResult(multiplyResult);
}

function divide(num1,num2){
    let divisonResult = num2===0? "Error!" : (parseFloat(num1) / parseFloat(num2)).toFixed(4);
    operation="";
    return trimResult(divisonResult);
}

function trimResult(respectiveResult){
    for(let i = 0 ; i<respectiveResult.length;i++){
        if(respectiveResult[i]==='.'){
             dot = i;
             break;
        }
    }
    for(let j = dot; j<respectiveResult.length-1;j++){
        if(respectiveResult[j+1] != "0"){
            isZero = 1;
        }
    }
    if(isZero === 0){
        respectiveResult = respectiveResult.slice(0, dot);
    }
    isZero = 0;

    return respectiveResult
}
