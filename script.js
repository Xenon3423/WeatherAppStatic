

const fetchData = async () => {
    const result = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.044&lon=38.976&appid=7d43a6c89a3594bdde212d7f5af4bcc1&units=metric&lang=ru');
    const data = await result.json();

    console.log(data);

    let city = document.getElementById('city');
    city.innerHTML = data.name;

    let temp = document.getElementById('temperature')
    temp.innerHTML = Math.round(data.main.temp);

    let summary = document.getElementById('summary')
    summary.innerHTML = Math.round(data.main.temp);

    let condition = document.getElementById('condition');
    condition.innerHTML = data.weather[0].description;
    
    let maxtemp = document.getElementById('maxt');
    maxtemp.innerHTML = data.main.temp_max;

    let mintemp = document.getElementById('mint');
    mintemp.innerHTML = data.main.temp_min;

}

fetchData();





// const fetchData2 = async () => {
//     const result = await fetch('https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=true', { method: 'GET',  headers: { "X-Yandex-API-Key": "97d7f833-8c47-48e1-b627-d8e8531c5759" }});
//     const data = await result.json();

//     console.log(data);
// }

// fetchData2();