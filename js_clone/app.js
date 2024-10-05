const loginForm = document.querySelector("#login-form");
//  <div id="login-form">
// <input type="text" placeholder="What's your name?" />
// <button>Log In</button>
// </div> element를 끌어옴 
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
//div 안에서 각각 input과 button을 끌어옴. loginForm 안에서 찾을 수 있었음 
// (html이라는 큰 범위가 아니어도!)

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
//아래로 변경 가능 

function LoginBtnClick () {
    console.log(username);

}

loginButton.addEventListener("click",LoginBtnClick)