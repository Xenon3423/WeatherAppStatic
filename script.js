

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
    maxtemp.innerHTML = Math.round(data.main.temp_max);

    let mintemp = document.getElementById('mint');
    mintemp.innerHTML = Math.round(data.main.temp_min);

    let feelslike = document.getElementById('feels-like');
    feelslike.innerHTML = Math.round(data.main.feels_like);

    let humidity = document.getElementById('humidity');
    humidity.innerHTML = data.main.humidity;

    let pressure = document.getElementById('pressure');
    pressure.innerHTML = data.main.pressure;

    let wind = document.getElementById('wind');
    wind.innerHTML = data.wind.speed;

    function timeConverter(UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = hour + ':' + min + ':' + sec;
        return time;
    }

    let timesunrise = timeConverter(data.sys.sunrise);
    let timesunset = timeConverter(data.sys.sunset);

    let sunrise = document.getElementById('sunrise');
    sunrise.innerHTML = timesunrise;

    let sunset = document.getElementById('sunset');
    sunset.innerHTML = timesunset;


}

fetchData();