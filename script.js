const apikey= "cca90f178798f5d4c61e37cc34f30b38";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector("#form-field");
const searchBtn = document.querySelector(".btn");

async function checkweather(city){
  const response = await fetch(url +city+`&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

 document.querySelector(".city-name").innerHTML=data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
document.querySelector(".humid").innerHTML=data.main.humidity+"%";
  document.querySelector(".speed").innerHTML=data.wind.speed+"km/h";
const icon = document.querySelector(".weather-icon");

  if(data.weather[0].main=="Haze"){
  icon.src= "images/clouds.png";
    }

  else if(data.weather[0].main=="Humidity"){
    icon.src="images/humidity.png";
  }

  else if(data.weather[0].main=="Clear"){
    icon.src="images/clear.png";
  }

  else if(data.weather[0].main=="Mist"){
    icon.src="images/Mist.png";
  }

  else if(data.weather[0].main=="Drizzle"){
    icon.src="images/drizzle.png";
  }

  else if(data.weather[0].main=="Snow"){
    icon.src="images/snow.png";
  }

  else if(data.weather[0].main=="Rain"){
    icon.src="images/rain.png"
  }
}

searchBtn.addEventListener("click",()=>{
checkweather(searchBox.value);
  
})

