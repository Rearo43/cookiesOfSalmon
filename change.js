/// change the color of webpage
var input = document.querySelector('input');
var nav = document.querySelector('nav');

input.addEventListener('change', function(){
  nav.style.setProperty('--nav-color', input.value);
});





