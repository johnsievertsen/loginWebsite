const userInput = document.querySelector('.username');
const passInput = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
let userInputText = '';
let passInputText = '';
const modal = document.querySelector('.modal');
const span = document.querySelector('.close');
let modalText = document.getElementById('modal-text');
let num = 0;
let userInnerArray = [localStorage.getItem(`username${num}`)];
let passInnerArray = [localStorage.getItem(`password${num}`)];
let iu = [num, userInnerArray];
let ip = [num, passInnerArray];
const url = new URL("https://johnsievertsen.github.io/loginWebsite/website")
localStorage.setItem('iu', JSON.stringify(iu));
localStorage.setItem('ip', JSON.stringify(ip));
// ----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------
function login(e) {
    userInputText = document.querySelector('.username').value;
    passInputText = document.querySelector('.password').value;
    if (userInnerArray.some(userAuth) && passInnerArray.some(passAuth)) {
        modal.style.display = "block";
        modalText.innerHTML = `Welcome ${userInputText}`;
        document.querySelector('.modal-content').style.color = "blueviolet";
        span.onclick = function () {
            modal.style.display = "none";
            window.open(url, '_blank');
        }
    } else {
        modal.style.display = "block";
        modalText.innerHTML = 'Incorrect Username or Password';
        document.querySelector('.modal-content').style.color = "red";
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
    if (!userInputText || !passInputText) {
        modal.style.display = "block";
        modalText.innerHTML = 'Please enter a username and password.';
        document.querySelector('.modal-content').style.color = "red";
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
}

function userAuth(username) {
    return (username === userInputText);
}

function passAuth(password) {
    return (password === passInputText) && (userInnerArray.indexOf(userInputText) === passInnerArray.indexOf(passInputText));
}

function register(e) {
    userInputText = document.querySelector('.username').value;
    passInputText = document.querySelector('.password').value;
    if (userInnerArray.some(userAuth)) {
        modal.style.display = "block";
        modalText.innerHTML = 'This username already exists.';
        document.querySelector('.modal-content').style.color = "red";
        span.onclick = function () {
            modal.style.display = "none";
        }
    } else {
        num++;
        localStorage.setItem(`username${num}`, userInputText);
        localStorage.setItem(`password${num}`, passInputText);
        userInnerArray.push(localStorage.getItem(`username${num}`));
        passInnerArray.push(localStorage.getItem(`password${num}`));
        iu.push([userInnerArray[num]]);
        ip.push([passInnerArray[num]]);
        modal.style.display = "block";
        modalText.innerHTML = 'Account registered. You may now log in.';
        document.querySelector('.modal-content').style.color = "blueviolet";
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
    if (!userInputText || !passInputText) {
        modal.style.display = "block";
        modalText.innerHTML = 'Please enter a username and password.';
        document.querySelector('.modal-content').style.color = "red";
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
}

loginBtn.addEventListener('click', login);
registerBtn.addEventListener('click', register);