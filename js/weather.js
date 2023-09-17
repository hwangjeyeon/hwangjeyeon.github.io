

function onGeoOk(position){

    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const api = 'a49442fc7cc2167a1f9057998f83f7f7'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric`;

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            const cityElement = document.getElementById("city");
            const weatherInfoElement = document.getElementById("temperature");
            const weatherIconElement = document.getElementById("weatherIcon");
            
            const cityName = data.name;
            const temperature = data.main.temp;
            const weatherIconCode = data.weather[0].icon;

            // 도시명과 날씨 정보를 업데이트합니다.
            cityElement.innerText = `${cityName}`;
            weatherInfoElement.innerText = `${temperature}°C`;

            // 날씨 아이콘 URL을 생성합니다.
            const iconUrl = `https://openweathermap.org/img/w/${weatherIconCode}.png`;
            weatherIconElement.src = iconUrl;
        })
        .catch((error) => {
            console.error('날씨 정보를 가져오는 중 오류가 발생했습니다:', error);
        });
}

function onGeoError() {
    alert("날씨 정보를 찾을 수 없습니다");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
