# Javascript Projects 
## Project Link 
[Click Here]("https://stackblitz.com/edit/dom-project-chaiaurcode-ks3termc")

### Project Solution 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    switch (event.target.id) {
      case "grey":
        body.style.backgroundColor = event.target.id;
        break;
      case "white":
        body.style.backgroundColor = event.target.id;
        break;
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;
      case "purple":
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});
```

### Project Solution 2

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  results.innerHTML = ''; // Clear previous result before showing a new one

  if (!height || height <= 0 || isNaN(height)) {
    results.appendChild(
      document.createTextNode(`Please give a valid height ${height}`)
    );
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    results.appendChild(
      document.createTextNode(`Please give a valid height ${weight}`)
    );
  } else {
    const bmi = Math.floor(weight / (height / 100) ** 2);
    if (bmi < 18.6) {
      results.appendChild(document.createTextNode(`Under Weight: ${bmi}`));
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.appendChild(document.createTextNode(`Normal Range: ${bmi}`));
    } else {
      results.appendChild(document.createTextNode(`Over Weight: ${bmi}`));
    }
  }
});
```

### Project Solution 3

```javascript
const clock = document.getElementById('clock');
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  // console.log(date.toLocaleTimeString())
  let prepand = hour >= 12 ? 'PM' : 'AM';
  hour = hour >= 12 ? hour - 12 : hour;
  clock.innerHTML = `${hour}:${min}:${sec} ${prepand}`;
}, 1000);

```

### Project Solution 4

```javascript
let randomNum = parseInt(Math.random() * 100 + 1);
const sumbit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  sumbit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number!');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    if (numGuess === 11) {
      prevGuess.push(guess);
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is TOOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList('button');
  p.innerHTML = `<h3 id="newGame">Start new game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```

### Project 5 Solution

```javascript
  // generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let stopInterval;

const startChangingColor = function () {
  if (!stopInterval) {
    stopInterval = setInterval(changeColor, 1000);
  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(stopInterval);
  stopInterval = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

// console.log(randomColor())

```

### Project 6 Solution

```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <table border="1">
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

  `;
});
```