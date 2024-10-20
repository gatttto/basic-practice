//object의 array 형태, object 간 콤마 필요함 
const quotes = [
    {   
        quote: "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
        author: "Walt Disney",
    },
    {   
        quote: "Never say goodbye because goodbye means going away and going away means forgetting.",
        author: "Peter Pan",
    },
    {   
        quote: "If you focus on what you left behind, you will never see what lies ahead.",
        author: "Ratatouille",
    },
    {   
        quote: "The past can hurt. But from the way I see it, you can either run from it, or learn from it.",
        author: "Lion King",
    },
    {   
        quote: "To love someone, you have to love yourself first.",
        author: "Beauty and the Beast",
    },
    {   
        quote: "Remember, you’re the one who can fill the world with sunshine.",
        author: "Snow White and the Seven Dwarves",
    },
    {   
        quote: "But the thing that makes Woody special is he will never give up on you, ever.",
        author: "Toy Story",
    },
    {   
        quote: "Anyone can be anything",
        author: "zootopia",
    },
    {   
        quote: "Venture outside your comfort zone. The rewards are worth it.",
        author: "Rapunzel",
    },
];

const quote = document.querySelector("#quote span:first-child"); //quotes arrya에서 quote를 불러오는 코드
const author = document.querySelector("#quote span:last-child"); //quotes arrya에서 author을 불러오는 코드 

//console.log(quotes[0]); 0부터 시작하는 것 알기! 

//Math.random() *10을 통해 0~9까지 랜덤 숫자를 얻을 수 있음 
//그러나, 소수점 30942자리 정도 되므로, 정수를 얻을 수는 없음 
//정수를 얻는 함수 1. Math.round() .5를 기준으로 반올림/반내림한 숫자를 출력함 
//정수를 얻는 함수 2. Math.ceil() 무조건 하나 위 숫자로 출력함 
//정수를 얻는 함수 3. Math.floor() 무조건 하나 아래 숫자로 출력함, ceil과 정반대 기능 
//console.log(quotes[Math.floor(Math.random() * quotes.length)])

const TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//array 속 출력할 object를 랜덤으로 정해서 랜덤 명언을 출력함 

quote.innerText = TodaysQuote.quote;
author.innerText = TodaysQuote.author;