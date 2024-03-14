var searchBox = document.querySelector("#search");
var weatherBox = document.querySelector("#weather");

//https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=21805bff7224936fa25d6cec016a0a4b&units=metric
searchBox.addEventListener(
    "keyup",
    async function (event) {
        if (event.key == "Enter") {
            weatherBox.innerHTML = `  <h2>loading <div class="spinner-border" role="status">
                                                 <span class="visually-hidden">Loading...</span>
                                         </div></h2>`

            var city = searchBox.value;
            var api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric `;
            var respone = await fetch(api);
            var data = await respone.json();

            if (data.cod == 404) {
                weatherBox.innerHTML = `  <h2>City Not Found</h2>`
            } 
            else {
                weatherBox.innerHTML = `<div><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div>
                                        <div>
                                                <h2>${data.main.temp}</h2>
                                                <h4>${data.weather[0].main}</h4>
                                        </div>`
                                    }
        }
    }
)


