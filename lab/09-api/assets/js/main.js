console.log('hello world')

// Insert your actual API request URL below
fetch('https://api.openweathermap.org/data/2.5/weather?zip=90024&APPID=d1bfd2d04e2c413b530432c191a799ba&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });


// RENDER FUNCTION SETUP
// ---------------------

var tempSpan= document.querySelector('.temp')
var windSpeedSpan= document.querySelector('.wind-speed')
var windDirSpan= document.querySelector(' .wind-dir')
var weatherVaneWrapper= document.querySelector(' .weather-vane-wrapper')
var weatherVane= document.querySelector(' .weather-vane')


function render(data) {

  // log the data in it's entirety
  console.log(data);

  // log the current temperature
  console.log(data.main.temp);

  // insert the temperature
  tempSpan.innerText = data.main.temp

  // log the wind speed
  console.log(data.wind.speed);

  // insert the wind speed
  windSpeedSpan.innerText = data.wind.speed

  //log the wind degree
  console.log(data.wind.deg);

  // insert the wind degree
  windDirSpan.innerText = data.wind.deg

  // set background color based on temp
  document.body.style.backgroundColor = 'hsl(' + data.wind.deg + ',50%,50%)'

  // rotate the weather vane based on wind direction
  weatherVaneWrapper.style.transform = 'rotate(' + data.wind.deg + 'deg)'

  // set animation duration of weather vane based on wind wind speed
  weatherVane.style.animationDuration = 5 / data.wind.speed + 's'
}
