const counterOne = document.querySelector('#counterOne');
const counterTwo = document.querySelector('#counterTwo');
const playToSelection = document.querySelector('#playTo');
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const resetBtn = document.querySelector('#reset');

let playingTo = 1;
let scoreOne = 0;
let scoreTwo = 0;

const reset = () => {
    scoreOne = 0;
    scoreTwo = 0;
    counterOne.style.color = '';
    counterTwo.style.color = '';
    counterOne.innerText = scoreOne;
    counterTwo.innerText = scoreTwo;
    btnOne.disabled = false;
    btnTwo.disabled = false;
}

playToSelection.addEventListener('change', () => {
    reset();
    playingTo = parseInt(playToSelection.value);
});

resetBtn.addEventListener('click', () => {
    reset();
    playToSelection.value = '1';
    playingTo = 1;
});

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

// I thought of refactoring by making two objects for the two players and one generic function to add as eventListener, but wouldn't make it much shorter here so left as is. I later saw Colt did so.
// I didn't focus on responsive design with this app