const counterOne = document.querySelector('#counterOne');
const counterTwo = document.querySelector('#counterTwo');
const playToSelection = document.querySelector('#playTo');
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const reset = document.querySelector('#reset');

let playingTo = 1;
let scoreOne = 0;
let scoreTwo = 0;

playToSelection.addEventListener('click', () => {
    playingTo = parseInt(playToSelection.value);
});

reset.addEventListener('click', () => {
    scoreOne = 0;
    scoreTwo = 0;
    counterOne.style.color = '';
    counterTwo.style.color = '';
    counterOne.innerText = scoreOne;
    counterTwo.innerText = scoreTwo;
    btnOne.disabled = false;
    btnTwo.disabled = false;
})

btnOne.addEventListener('click', () => {
    if (scoreOne < playingTo && scoreTwo < playingTo) {
        if (playingTo - scoreOne === 1) {
            scoreOne++;
            counterOne.innerText = scoreOne;
            counterOne.style.color = 'green';
            counterTwo.style.color = 'red';
            btnTwo.disabled = true;
        } else {
            scoreOne++;
            counterOne.innerText = scoreOne;
        }
    }
})

btnTwo.addEventListener('click', () => {
    if (scoreTwo < playingTo && scoreOne < playingTo) {
        if (playingTo - scoreTwo === 1) {
            scoreTwo++;
            counterTwo.innerText = scoreTwo;
            counterTwo.style.color = 'green';
            counterOne.style.color = 'red';
            btnOne.disabled = true;
        } else {
            scoreTwo++;
            counterTwo.innerText = scoreTwo;
        }
    }
})

// when refactoring the code, check out the use of 'this' for when looping over the btns to set the eventListeners