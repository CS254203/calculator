const display = document.querySelector("#display-text"); 
let number1 = "0";
let number2 = "0";
let switchToNumber2 = 0;
let operation = "";
let result = 0;

function acOnClick(){
    display.innerHTML="0";
    if(switchToNumber2===0){
        number1 = "0";
    }
    else{
        number2 = "0";
    }
    console.log("acOnClick number1:" + number1); 
    console.log("acOnClick number2:" + number2);
}
function clearScreen(){
    display.innerHTML="0";
    number1 = "0";
    number2 = "0";
    switchToNumber2 = 0;
    console.log("clearScreen number1:" + number1); 
    console.log("clearScreen number2:" + number2);
}

function numberOnClick(value){
    if(switchToNumber2===0){
        number1 +=value;
        //eliminates the initial '0' in front of string
        if(number1[0] === '0'){
            number1 = number1.slice(1, number1.length);
        }
        //stops the string from overlaping the display
        else if(number1.length>=11){
            return;
        }
        display.innerHTML=number1;
    }
    else{
        number2 +=value;
        if(number2[0] === '0'){
            number2 = number2.slice(1, number2.length);
        }
        else if(number2.length>=11){
            return;
        }
        display.innerHTML=number2;
    }
}

function addButton(){
    console.log("number1:" + number1); 
    console.log("number2:" + number2);
    switchToNumber2 = 1;
    operation="+";
    display.innerHTML="0";
}

function subtractButton(){
    console.log("number1:" + number1); 
    console.log("number2:" + number2);
    switchToNumber2 = 1;
    operation="-";
    display.innerHTML="0";
}

function multiplyButton(){
    console.log("number1:" + number1); 
    console.log("number2:" + number2);
    switchToNumber2 = 1;
    operation="*";
    display.innerHTML="0";
}

function divideButton(){
    console.log("number1:" + number1); 
    console.log("number2:" + number2);
    switchToNumber2 = 1;
    operation="/";
    display.innerHTML="0";
}

function showResult(){
    operate(number1,number2,operation)
}
function printResult(result){
    display.innerHTML= result.toString();
    number1 = result;
    number2 = "0";
    console.log("result number1 "+number1);
    console.log("result number2 "+number2);
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
            result = divide(num1,num2);
            printResult(result);
            break;
      } 
}

function add(num1,num2){
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num2===0? "Error!" : num1/num2;
}