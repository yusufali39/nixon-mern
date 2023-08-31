let menu = document.getElementById('menu');
let menu_btn = document.getElementById('menu_btn');
let content = document.getElementsByClassName('content')[0];
menu_btn.addEventListener('click', () => {
    menu.classList.toggle('ul_active');
    menu_btn.classList.toggle('bi-x-lg');

    let h1Element = content.querySelector('h1');
    if (h1Element.style.opacity === '0.1') 
    {
        h1Element.style.opacity = '1';
    } else {
        h1Element.style.opacity = '0.1';
    }
})
heading = document.querySelector('.text');

let text = 'hello world!!';
let texts = ['Namastey.','Introducing nixon.']

let i = 1;
isForwards = true;
textCount = 0;

setInterval(function(){
  heading.textContent = texts[textCount].substring(0,i);
  if (isForwards){
    i++;
  }
  else {
    i--;
  }
  if(i > text.length + 10) {
    isForwards = false;
  }
  if(i<0){
    isForwards = true;
    textCount++;
  }
  if(textCount > texts.length-1) {
    textCount = 0;
  }
},80)
window.onload = function(){
  var body = document.getElementById("body");
  var button = document.getElementById("button");

  button.onclick = function (){
      if(body.className == "white"){
          body.className = "black";
          button.className = "black";
          button.classList.toggle('bi-moon-stars');
      }else{
          body.className = "white";
          button.className = "white";
          button.classList.toggle('bi-sun');
      }
  };
  };