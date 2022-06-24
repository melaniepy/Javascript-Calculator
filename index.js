 //to input number into the program
 const num1 = parseFloat( prompt('Enter nr1: '));// 10 >> '10'
 const num2 = parseFloat( prompt('Enter nr2: '));//abc, null NaN
 // to input operator(+,-,/,*)
 const operator = prompt('Enter operator (+, -, /, *)');
 //alert user in case of wrong entry or empty input
 let result = 0;
 if(isNaN(num1) || isNaN(num2)){
     alert('Wrong Input! Refresh the page again and provide data!');
 }else
     if(operator == '+'){
         result = num1 + num2;
     }else if(operator == '-'){
         result = num1 - num2;
     }else if(operator == '*'){
         result = num1 * num2;
     }else if(operator == '/'){
         result = num1 / num2;
     }
     document.write(num1 + operator + num2 + '=' + result);