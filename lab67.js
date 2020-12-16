

var x= prompt("Please enter your First name");
var job= prompt("Are you an Instructor,a TA, or a student?");
printhello();

function printhello() {
    while (job!=='TA' && job!=='student' && job!=='Instructor'){
   job=prompt("You have entered invaild value. Please re-enter your job");
      
    }
if (job=="TA" || job=='Instructor') { 
    alert("Hello Mr/ Miss " + x);
    alert("Hope you like my work");
} else {
    if (job == "student"){
      alert("Hello " + x);}
     }
    }
    // second part of the code to test your knowledge
alert("Let's test your knowledge!");
var quiz=prompt("What is the percentage of Water in your body?");
waterpercentage();
function waterpercentage() { 
    if(quiz==60){prompt("That is quite right!");
    } else {
alert("That is not correct but you can find all related information in our page!");
    }
}
// adding image
function printimg (){
    if(quiz==60){
var item="<img src='https://arcsar-innovation.eu/sites/default/files/challenge-images/aqua-3445987_640.jpg'>";
    } else {
        var item="<img src='https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/side_image/public/thumbnails/image/wss-property-water-in-you-body.png'>";
    }
    return item;
}
// for loop
let howMany = function() {
    let count = prompt('Enter a number from 0 to 5');
  
    while(count === '' || isNaN(count)) {
      count = prompt('Please re-enter a number!! from 0 to 5');
    }
  
    return count;
  } 
  let showOrder = function() {
    let item = printimg();
    let total = howMany();
    let result = '';
  
    for(let i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }
    // document.write(item);
    return result;
  }