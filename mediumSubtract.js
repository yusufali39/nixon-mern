const num1 = Math.ceil(Math.random()*100);
const num2 = Math.ceil(Math.random()*100);
const questionE = document.getElementById('question');
const inputE = document.getElementById('input');
const formE = document.getElementById('form');
const scoreE = document.getElementById('score');
let score = JSON.parse(localStorage.getItem('score'));
if(!score){
    score = 0;
}
scoreE.innerText = `Score: ${score}`;
questionE.innerText = `What is ${num1} subtract by ${num2}?`;
const correctAns = num1 - num2;
formE.addEventListener('submit', ()=>{
    const userAns = +inputE.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});
function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score));
}