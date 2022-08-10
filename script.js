const display = document.querySelector("#display-text"); 
let number1 = "0";
let number2 = "0";
let switchToNumber2 = 0;


function acOnClick(){
    display.innerHTML="0";
    number1 = "0";
    number2 = "0";
}

function numberOnClick(value){
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

function operate(num1,num2,operation){
    switch(operation) {
        case "+":
            add(num1,num2);
          break;
        case "-":
            subtract(num1,num2);
            break;
        case "*":
            multiply(num1,num2);
            break;
        case "/":
            divide(num1,num2);
            break;
      } 
}

function add(num1,num2){
    return num1+num2;
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