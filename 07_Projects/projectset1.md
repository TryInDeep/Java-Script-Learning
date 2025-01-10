# Project Related DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution

Project 1
```javascript
// first we have select all the buttons 
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body");

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click',function (e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === "grey")
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "white")
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "blue")
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "yellow")
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "purple")
    {
      body.style.backgroundColor = e.target.id;
    }
  })
})


```
Project 2
```javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height))
  {
    result.innerHTML = `Please give a valid Height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight) )
  {
    result.innerHTML = `Please give a valid weight ${weight}`;
  }
  else
  {
    const BMI  = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${BMI}</span>` ;  
  }
})

```

Project 3
``` JavaScript

document.getElementById('clock');
// document.querySelector('clock')

let date = new Date();
console.log(date);

setInterval(function()
{

  let date = new Date();
  // console.log(date.toLocaleString());
   clock.innerHTML = date.toLocaleString();

},1000) // milisecond

```

Project 4 
``` JavaScript 
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gussSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); // insert a paragrah

let prevGuess = []; // empty array
let numGuess = 1; // count of guessing
let playGame = true; //play

//taking the user input
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validationCheck(guess);
  });
}

// check the input is valid of or not
function validationCheck(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMassage(`Game Over. The Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Checking the Guesses
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMassage(`Huraah ! you guessed the Number`);
    endGame();
  } else if (guess < randomNumber) {
    displayMassage(`The number is TOO low`);
  } else if (guess > randomNumber) {
    displayMassage(`The number is TOO high`);
  }
}

function displayGuess(guess) {
  //
  userInput.innerHTML = '';
  gussSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMassage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;
    gussSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame();
  });
}
```


Project 5 Async PRoject (1)
``` JavaScript 
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>keyCode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
  `;
});
```








Project 6 Async PRoject (2)
``` JavaScript 

//Generate Random Color


const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let IntervalId;
const startChangingColor = function () {

  function changeBgColor ()
  {
    document.body.style.backgroundColor = randomColor();
  }
  if(!IntervalId)
  {
    IntervalId = setInterval(changeBgColor,1000)
  }
  
};
const stopChangingColor = function () 
{
  clearInterval(IntervalId)
  IntervalId = null ;
};


document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)


```
