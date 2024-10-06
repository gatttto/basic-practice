const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function LoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "hello " + username;
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
    console.log(username);
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked!");
}

loginForm.addEventListener("submit",LoginSubmit);
link.addEventListener("click", handleLinkClick);

//handleLinkClick({information about the event that just happened})