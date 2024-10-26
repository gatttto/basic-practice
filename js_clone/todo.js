const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); //todoForm.queryselector("input")과 같음 
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo){ //todo를 그리는 함수, 어떤 걸 그려야 할지 모르니 인자를 new todo로 줌 
    const li = document.createElement("li") // 변수 이름은 html 태그로 만들 필요 없음 !! 
    const span = document.createElement("span"); //
    li.appendChild(span); //li는 span 이라는 자식을 가짐 
    span.innerText = newTodo; // 텍스트를 span 내부에 넣음 *텍스트 = 사용자가 form에 남긴 newTodo 값
    toDoList.appendChild(li); //html에 newtodo 넣어 
}

function handleToDoSubmit(event) {
    event.preventDefault(); //브라우저가 새로고침하는 디폴트 행동을 막음 
    const newTodo = toDoInput.value; //value를 저장함, value 값을 새로운 변수에 저장하는 것 
    toDoInput.value = ""; //input에 value 값을 넣고 엔터를 치면 비워짐 (겉보기에만), 하지만 그게 new todo를 비우는 건 아님 
    paintTodo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);