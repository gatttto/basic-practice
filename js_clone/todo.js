const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); //todoForm.queryselector("input")과 같음 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveTodos(){ //toDos array에 있는 것을 localstorage에 넣는 것 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //"todos" localstorage에 나타나는 key 값
    //JSON.stringify(toDos) : localstorage에서 text로 나타나는 것들을 array 형식으로 나타내기 위해 사용함 
} 

function deleteTodo(event){ //submit event를 가져온 것처럼 click event에 대한 정보를 가져옴 (path를 보면 나옴)
    //console.log 찍었을 때  parentNode/parentElement -> 버튼의 부모가 누군지 알 수 있음 
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){ //todo를 그리는 함수, 어떤 걸 그려야 할지 모르니 인자를 new todo로 줌 
    const li = document.createElement("li") // 변수 이름은 html 태그로 만들 필요 없음 !! 
    const span = document.createElement("span"); //
    span.innerText = newTodo; // 텍스트를 span 내부에 넣음 *텍스트 = 사용자가 form에 남긴 newTodo 값
    const button = document.createElement("button");
    button.innerText = "지우기"; 
    button.addEventListener("click", deleteTodo)
    li.appendChild(span); //li는 span 이라는 자식을 가짐 
    li.appendChild(button); //li (newtood) 
    toDoList.appendChild(li); //html에 newtodo 넣어 
} // aapendchild 는 가장 마지막에 넣어야 함 

///event listner을 통해 클릭 발생을 확인, eventlistner를 button에 클릭해야 함

function handleToDoSubmit(event) {
    event.preventDefault(); //브라우저가 새로고침하는 디폴트 행동을 막음 
    const newTodo = toDoInput.value; //value를  저장함, value 값을 새로운 변수에 저장하는 것 
    toDoInput.value = ""; //input에 value  값을 넣고 엔터를 치면 비워짐 (겉보기에만), 하지만 그게 new todo를 비우는 건 아님 
    toDos.push(newTodo) //array.push -> 배열 끝에 추가함 / paintTodo전에 배열에 newtodo를 푸시하는 것 
    paintTodo(newTodo);
    saveTodos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); 

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.array.forEach();
} 