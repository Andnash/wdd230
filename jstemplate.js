/*var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting  = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

or 
let last_mod = document.getElementById('last_mod');

or
var string = document.lastModified; 
  
}*/


let last_mod = new Date(document.lastModified);
  


