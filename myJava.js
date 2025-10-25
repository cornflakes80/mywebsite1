
function myFunction1() { 
  document.getElementById("demo1").innerHTML = "HTML stands for HyperText Markup Language";}

function myFunction2() { 
  document.getElementById("demo2").innerHTML = "CSS, which stands for Cascading Style Sheets, is a style sheet language used in web development to control the presentation and formatting of HTML documents. It allows developers to define the visual appearance of web pages, including aspects such as layout, colors, fonts, spacing, and responsive behavior for different devices.";}

  function myFunction3() { 

  document.getElementById("demo3").innerHTML = "JavaScript (JS) is a high-level, dynamic, and interpreted programming language primarily used to create interactive and dynamic content on web pages. While HTML provides the structure and CSS handles the styling, JavaScript adds behavior and functionality to websites.";}

//calculator progam

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}
function clearDisplay(){
    display.value ="";


}
function calculate(){
    try{
    display.value = eval(display.value);
    }
catch(error){
    display.value = "Try Again"
}
}
