const head1 = document.querySelector("#hd");
const message = document.querySelector(".msg");
const inputs = document.querySelector("#in");
const btn = document.querySelector("#sub");

let win = false;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num = getRandomInt(1, 20);

const check = () => {
    const userGuess = Number(inputs.value);
    if (userGuess === num) {
        head1.innerText = "You guessed right";
        message.innerText = "correct";
        win = true;
    } else if (userGuess < num) {
        message.innerText = "Too low";
    } else {
        message.innerText = "Too high";
    }
}

btn.addEventListener("click", check);
