const APIKEY = 'bb0220e8123f6ddf46f8b3ef1e980178';

let apiCall = function(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('#city').innerHTML = data.name;
      document.querySelector('#temp').innerHTML = `<i class='fas fa-thermometer-half'></i><span class="weather-info">${data.main.temp} °C</span>`;
      document.querySelector('#humidity').innerHTML = `<i class='fas fa-tint'></i><span class="weather-info">${data.main.humidity} %</span>`;
      document.querySelector('#wind').innerHTML = `<i class='fas fa-wind'></i><span class="weather-info">${data.wind.speed} km/h</span>`;
    })
    .catch((err) => console.log(`Erreur: ${err}`));
};

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;
  apiCall(ville);
});

apiCall('Paris');
const btnToggle = document.querySelector('.btn-toggle');
const volet = document.querySelector('.volet');

btnToggle.addEventListener('click', () => {
  volet.classList.toggle('show');
});
