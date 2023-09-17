

function timer(){
    const clock = document.getElementById("clocks");
    const Today = document.getElementById("today");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");

    Today.innerText = `${year}년 ${month}월 ${day}일`
    clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
    requestAnimationFrame(timer);
}

setInterval(timer, 0);
setInterval(timer, 1000);

