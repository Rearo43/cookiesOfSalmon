/// change the color of webpage
var input = document.querySelector('input');
var nav = document.querySelector('nav');
var article = document.querySelector('article');

input.addEventListener('change',
  function(){
    nav.style.setProperty('--nav-color', input.value);
  });

input.addEventListener('change',
  function(){
    article.style.setProperty('--article-color', input.value);
  });


