let menu = document.getElementById('menu');
let menu_btn = document.getElementById('menu_btn');
let content = document.getElementsByClassName('content')[0];
menu_btn.addEventListener('click', () => {
    menu.classList.toggle('ul_active');
    menu_btn.classList.toggle('bi-x-diamond-fill');

    let h1Element = content.querySelector('h1');
    if (h1Element.style.opacity === '0.1') 
    {
        h1Element.style.opacity = '1';
    } else {
        h1Element.style.opacity = '0.1';
    }
})