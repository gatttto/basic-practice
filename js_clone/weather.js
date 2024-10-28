const API_KEY = "4d86880353f69c7a295cd4a02432846d";

function onGeoOk(position){ //유저의 위치를 받음 
    const lat = position.coords.latitude; //위경도 함수 지정 
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`; //api 불러오는 법 
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            weather.innerText = `${data.weather[0].main} / ${data.wind.speed}`
            city.innerText = data.name;
        } ); // 처음에 할 때 처럼 url을 통하지 않고 javascript가 url을 부를 수 있음 
    //fetch는 promise, 시간이 좀 걸려서 나타남 -> 서버의 응답을 기다리기 위해 .then()
}

function onGeoError(){
    alert("can't find you. No weather for you.") //오류났을 때 유저한테 알려줌 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //이걸 부르면 브라우저에서 좌표를 줌 !! 
