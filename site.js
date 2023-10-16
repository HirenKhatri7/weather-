// OpenWeather api 
const apiKey  = "048a0fb05536704c302f68dfbc33c3c0" // add your api key
const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=5b833c1caa8648aa89e130201232509&q="
//http://api.weatherapi.com/v1/forecast.json?key=5b833c1caa8648aa89e130201232509&q=mumbai&days=2&aqi=no&alerts=no
const searchBox = document.querySelector('.searchinput');
const searchBtn = document.querySelector('.searchbutton');
const weatherIcon = document.querySelector('.weathericon');
const weatherIcon2 = document.querySelector('.weathericon2');
const weatherIcon3 = document.querySelector('.weathericon3');

// checkWeather(defaultcity);


// fetch data from the API 
checkWeather("mumbai");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + "&days=3&aqi=no&alerts=no" )
  var data = await response.json()



  // display data 
  document.querySelector('.city1').innerHTML = data.location.name+ ","+data.location.region;

  document.querySelector('.temp').innerHTML = data.current.temp_c + "°c";
  document.querySelector('p.humidity').innerHTML = data.current.humidity + "%";
  document.querySelector('p.wind').innerHTML = data.current.wind_kph + "km/h";

  document.querySelector('.temptwo').innerHTML = data.forecast.forecastday[1].day.avgtemp_c + "°c";
  document.querySelector('p.humiditytwo').innerHTML = data.forecast.forecastday[1].day.avghumidity + "%";
  document.querySelector('p.windtwo').innerHTML = data.forecast.forecastday[1].day.maxwind_kph + "km/h";

  document.querySelector('.tempthree').innerHTML = data.forecast.forecastday[2].day.avgtemp_c + "°c";
    document.querySelector('p.humiditythree').innerHTML = data.forecast.forecastday[2].day.avghumidity + "%";
  document.querySelector('p.windthree').innerHTML = data.forecast.forecastday[2].day.maxwind_kph + "km/h";
 
  
  var num = data.current.condition.icon;
 

  // change weather icon 
  // if(data.current.condition.code==1){
  //   weatherIcon.src = "./public//64x64/day/143.png"
  // }else if(data.weather[0].main == "Rain"){
  //   weatherIcon.src = "./public/rain.png"
  // }else if(data.weather[0].main == "Drizzle"){
  //   weatherIcon.src = "./public/drizzle.png"
  // }else if(data.weather[0].main == "Mist"){
  //   weatherIcon.src = "./public/mist.png"
  // }




  // Define the weather data as an array of objects
const weatherData = [
  {
		code : 1000,
		
		icon : 113
	},
	{
		code : 1003,

		icon : 116
	},
	{
		code : 1006,
		
		icon : 119
	},
	{
		code : 1009,
		
		icon : 122
	},
	{
		code : 1030,
		
		icon : 143
	},
	{
		code : 1063,
	
		icon : 176
	},
	{
		code : 1066,
		
		icon : 179
	},
	{
		code : 1069,
		
		icon : 182
	},
	{
		code : 1072,
	
		icon : 185
	},
	{
		code : 1087,
	
		icon : 200
	},
	{
		code : 1114,
	
		icon : 227
	},
	{
		code : 1117,
	
		icon : 230
	},
	{
		code : 1135,

		icon : 248
	},
	{
		code : 1147,
	
		icon : 260
	},
	{
		code : 1150,
		
		icon : 263
	},
	{
		code : 1153,

		icon : 266
	},
	{
		code : 1168,
	
		icon : 281
	},
	{
		code : 1171,

		icon : 284
	},
	{
		code : 1180,
	
		icon : 293
	},
	{
		code : 1183,

		icon : 296
	},
	{
		code : 1186,
	
		icon : 299
	},
	{
		code : 1189,

		icon : 302
	},
	{
		code : 1192,
	
		icon : 305
	},
	{
		code : 1195,

		icon : 308
	},
	{
		code : 1198,
		
		icon : 311
	},
	{
		code : 1201,
		
		icon : 314
	},
	{
		code : 1204,
	
		icon : 317
	},
	{
		code : 1207,
		
		icon : 320
	},
	{
		code : 1210,
		
		icon : 323
	},
	{
		code : 1213,
		
		icon : 326
	},
	{
		code : 1216,
	
		icon : 329
	},
	{
		code : 1219,
		
		icon : 332
	},
	{
		code : 1222,
		
		icon : 335
	},
	{
		code : 1225,
	
		icon : 338
	},
	{
		code : 1237,
		
		icon : 350
	},
	{
		code : 1240,
		
		icon : 353
	},
	{
		code : 1243,
		
		icon : 356
	},
	{
		code : 1246,
		
		icon : 359
	},
	{
		code : 1249,
		
		icon : 362
	},
	{
		code : 1252,
		
		icon : 365
	},
	{
		code : 1255,
		
		icon : 368
	},
	{
		code : 1258,
		
		icon : 371
	},
	{
		code : 1261,
		
		icon : 374
	},
	{
		code : 1264,
	
		icon : 377
	},
	{
		code : 1273,
	
		icon : 386
	},
	{
		code : 1276,
		
		icon : 389
	},
	{
		code : 1279,
		
		icon : 392
	},
	{
		code : 1282,
	
		icon : 395
	}
 
];


const codeToCheck = data.current.condition.code; 
const codeToCheck2 = data.forecast.forecastday[1].day.condition.code;

const codeToCheck3 = data.forecast.forecastday[2].day.condition.code;

let iconCode = -1; // Set to a default value
let iconCode2 = -1;
let iconCode3 = -1;
// Search for the code in the weatherData array
for (const weatherCondition of weatherData) {
  if (weatherCondition.code === codeToCheck) {
     
      iconCode = weatherCondition.icon;
      
      break;
  }
}
for (const weatherCondition of weatherData) {
	if (weatherCondition.code === codeToCheck2) {
	   
		iconCode2 = weatherCondition.icon;
		
		break;
	}
  }
  for (const weatherCondition of weatherData) {
	if (weatherCondition.code === codeToCheck3) {
	   
		iconCode3 = weatherCondition.icon;
		
		break;
	}
  }

 

 
weatherIcon.src="public/64x64/day/"+iconCode+".png";
weatherIcon2.src="public/64x64/day/"+iconCode2+".png";
weatherIcon3.src="public/64x64/day/"+iconCode3+".png";

// You can replace codeToCheck with the specific code you want to look up in the weather data.


}
searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
  })

