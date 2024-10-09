const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
function LoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    //greeting.innerText = "hello " + username;
    paintGreetings(username)
    console.log(username);
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked!");
}

loginForm.addEventListener("submit",LoginSubmit);


function paintGreetings(){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = "hello " + savedUsername;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",LoginSubmit);
}
else{
    paintGreetings(savedUsername)
}
//handleLinkClick({information about the event that just happened})