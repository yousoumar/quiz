"use strict"
const responses = ['c','a','a','b'];


const myForm = document.querySelector('form');

const questionBlocks = document.querySelectorAll('.question-block');


myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let note = responses.length;
    const entredResponses = document.querySelectorAll('input:checked');
    for (let i = 0; i<entredResponses.length;i++){
        if (responses[i] === entredResponses[i].value){
            questionBlocks[i].classList.add('succes');
        }else{
            questionBlocks[i].classList.add('error');
            note--;
            
        }
    
    }
    const resultSection = document.querySelector('.result');
    let resultH2, resultP;
    if(note!==responses.length){
       resultP = `<p>Vous avez une note de ${note}/${responses.length}.</p> <p>Corriger les réponses fausses et revalider.</p>`;
    }else{
        resultP = `<p>Vous avez une note de ${note}/${responses.length}.</p>`;
    }
    
    resultSection.style.display ="block";
    switch(note){
        case 0 :
            resultH2 = `<div class ="emoji">😭</div>`;
            
        break;
        case 1 :
            resultH2 = `<div class ="emoji">😢</div>`;
       
        break;
        case 2 :
            resultH2 = `<div class ="emoji">🥺</div>`;
          
        break;
        case 3 :
            resultH2 = `<div class ="emoji">🙂</div>`;
         
        break;
        case 4 :
            resultH2 = `<div class ="emoji">😎</div>`;
            resultP = `<p>Vous avez une note de ${note}/${responses.length}.</p> <p>Recharger la page pour rejouer.</p>`;
            document.querySelector('button').style.display ="none";
        break;
        

            
    }
    resultSection.innerHTML = `${resultH2} ${resultP}`
    
});


const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('click', ()=>{
        input.parentElement.parentElement.classList.remove('error');
        input.parentElement.parentElement.classList.remove('succes');
    });
});


