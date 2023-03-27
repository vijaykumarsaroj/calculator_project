//console.log(eval('4*5'));
/*
var op1=4;
var op2=8;
var operator='-';
//var res=eval(op1+" "+operator+" "+op2);
var res=eval(op1+operator+op2);
console.log(res);
*/
// lets start calculator
var buttons=document.getElementsByClassName("buttons");
var display=document.getElementById('display');
var operand1=0;
var operand2=null;
var operator=null;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute("data-value");
        if(value==='reset'){
            display.innerText=null;
        }
        else if(value=='+' || value=='-' || value=='/' || value=='*' || value=='%'){
            operator = value;
            operand1 = parseFloat(display.innerText);
            console.log("opera 1 = ", operand1);
            display.innerText = null;
        }
        else if(value==='='){
            if(operator!=null){
                operand2=parseFloat(display.textContent);
                display.innerText=eval(operand1+" "+operator+" "+operand2);
            }
            else{
                display.innerText=null;
            }
        }
        else if (value == "sign") {
            display.innerText = eval(parseFloat(display.innerText) * -1);
          } else if (value == ".") {
            if (display.innerText.length && !display.innerText.includes(".")) {
              display.innerText += value;
            }
          } else {
            display.innerText += value;
          }

    });
}
//input with keys

document.addEventListener("keypress", function (event) {
    var key;
    key = event.keyCode;
    var value = String.fromCharCode(key);
    console.log(key + " " + value);
    var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  
    if (
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "/" ||
      value == "%"
    ) {
      operator = value;
      operand1 = parseFloat(display.innerText);
      display.innerText = null;
    } else if (key == "13") {
      if (operator != null) {
        operand2 = parseFloat(display.innerText);
        display.innerText = eval(operand1 + " " + operator + " " + operand2);
      } else {
        display.innerText = "Error";
      }
    } else if (value == ".") {
      if (display.innerText.length && !display.innerText.includes(".")) {
        display.innerText += value;
      }
    } else if (value in numArray) {
      display.innerText += value;
    }
  });
  
  // For Clearing display with delete Key
  
  document.addEventListener("keydown", function (event) {
    var key;
    key = event.keyCode;
  
    if (key == "8") {
      display.innerText = null;
    }
  });