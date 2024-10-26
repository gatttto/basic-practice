const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
function LoginSubmit(event) {
    event.preventDefault(); // 원래 브라우저는 엔터를 누를 때 새로고침하고, form을 submit 하도록 되어 있음 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    //greeting.innerText = "hello " + username;
    paintGreetings(username)
    console.log(username);
}

loginForm.addEventListener("submit",LoginSubmit);  //함수 ()는 그 함수가 바로 실행된다는 것!! 바로 실행되는 걸 막으려면 ()를 빼야 함 

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