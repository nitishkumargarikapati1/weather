api = "3045dd712ffe6e702e3245525ac7fa38";

function convert(temperature) {
    return (temperature - 273).toFixed(1)
}
function getweatherinfo() {
    let target = document.querySelector(".city").value;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + target + '&appid=' + api;

    fetch(url).
        then(response => response.json())
        .then(data => {
            window.console.log(data);
            var city = data["name"];
            var description = data['weather']["0"]["description"];
            var temperature = data["main"]["temp"]
            var winds = data['wind']['speed']
            document.querySelector(".cityname").innerText = `${city}`;
            document.querySelector(".temperature").innerText = `Temperature: ${convert(temperature)}°C`;
            document.querySelector(".climaticcondition").innerText = `Climatic_Condtion: ${description}`;
            document.querySelector(".wind").innerText = `Wind Speed: ${winds} km/h`;
        

        }).catch(err => {
            alert("you entered wrong name")
        })



}
getweatherinfo();
console.log("nitishkumar garikapati");



