const backgrounds = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg"]

const random_number = Math.floor(Math.random()*backgrounds.length)
const random_Select = backgrounds[random_number];


const body = document.getElementById("background");

// 배경 이미지 및 스타일 설정
body.style.backgroundImage = `url("${random_Select}")`;
body.style.backgroundSize = "cover"; // 배경 이미지 크기 조절
body.style.backdropFilter = "blur(5px)";