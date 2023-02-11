
import { weather_data } from './data.js';

let loadDayForecastData = () => {
	
const [firstcity ] =  weather_data;
const {city , citycode,date,maxtemperature,mintemperature,cloudiness,wind,rainfall,forecast_today} = firstcity;
const [tarde,noche]  = forecast_today ;
const{text :texttarde, temperature :temperature,forecast : forescastarde ,icon :forsicot} =tarde;
const{text :textnoche, temperature :temperatura,forecast : forescasnoche ,icon :forsicon} =noche;

const objcity = document.getElementById ("city");
objcity.innerText = city;
const objmax = document.getElementById("maxtemperature");
objmax.innerText = maxtemperature;
const objmin = document.getElementById("mintemperature");
objmin.innerText = mintemperature;

const objicont = document.getElementById("late_icon");
objicont.innerText = forsicot;
const objicon = document.getElementById("night_icon");
objicon.innerText = forsicon;

const objcloud = document.getElementById("cloudiness");
objcloud.innerText = cloudiness;

const objwind = document.getElementById("wind");
objwind.innerText = wind;

const objrainfall = document.getElementById("rainfall");
objrainfall.innerText = rainfall;

const objhoy = document.getElementById("forecast_today");
objhoy.innerText = forecast_today;

const objdate = document.getElementById("date");
objdate.innerText = date;
const objtar = document.getElementById("late_temperature");
objtar.innerText = late_temperature;


}
loadDayForecastData();


/*

let loadWeekForecastData(e => {
    const {text,data,temperature: {min,max} ,icon } = e;
    templateforescast += <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">Mañana</h6>
      <span class="text-xs">Febrero, 12, 2023</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">31 ℃</span> |  <span class="text-dark mx-2">24 ℃</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">water_drop</i></div>
    </div>
  </li>;

});

objlistforecastweek.innerhtml =templateforescast;


const bntciudad  = document.getElementById("loadinfo");
btncargar.addevenlisttener('click' ,(event) => 
{
           const cityselectd = document.getElementById("dropdowmenubutton").ariaValueMax;
           loadWeekForecastData(cityselectd) })
*/