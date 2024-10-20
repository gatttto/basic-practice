const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; //랜덤 이미지를 골라냄 

const bgImage = document.createElement("img"); //이미지를 만들어 냄! createElement를 활용해서.. 
//createElement() 에는 태그가 와야함 !! 
bgImage.src = `image/${chosenImage}`; //만들어 낸 이미지 (라고 하지만 아직 string인)에 scr를 통해 실제로 이미지를 붙여줌 

document.body.appendChild(bgImage);
console.log(bgImage);
//console.log(chosenImage);
//항상 html을 작성하고, js로 작성한 html을 다뤄왔으나, 이번 배경 사진은 js에서 뭔가 생성해서 그걸 html로 나타냄
