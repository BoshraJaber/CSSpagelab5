var x= prompt("Please enter your First name");
var job= prompt("Are you a TA or a student?");
printhello();

function printhello() {
if (job == "TA") { 
    alert("Hello Mr/ Miss " + x);
    alert("Hope you like my work");
} else {
    if (job == "student"){
      alert("Hello " + x);}
      else alert(" Error message");
     }
     }
