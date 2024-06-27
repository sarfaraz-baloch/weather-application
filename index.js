let wind_speed = document.getElementById("wind_speed");
let humadity = document.getElementById("humadity");
let temp = document.getElementById("temp");
let time = document.getElementById("time");
let input = document.getElementById("input");
let img = document.getElementById("img");
let city = document.getElementById("city");
let svg = document.getElementById("svg");

//  function btn(){

async function Weather() {
  let apikey = "7f44474c1be1badba430e51b93a0c959";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value} `;
  try {
    let A = await fetch(apiurl + `&appid=${apikey}`);
    let B = await A.json();
    console.log(B);
    temp.innerHTML = Math.round(B.main.temp) + ` °C`;
    humadity.innerHTML = `${B.main.humidity} %`;
    wind_speed.innerHTML = `${B.wind.speed} km/h`;
    // time.innerHTML = new Date().toLocaleDateString()
    let date = new Date();
    time.innerHTML = `${date.getHours()} : ${date.getMinutes()}`;
    city.innerText = input.value + " , " + B.sys.country;
    img.src = `http://openweathermap.org/img/wn/${B.weather[0].icon}@2x.png`;
  } catch (error) {
    input.style.border = "3px solid red";
  }
}

async function Cities(event) {
  // API and  and funcation

  try {
    let apikey = "7f44474c1be1badba430e51b93a0c959";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${event.value} `;

    let A = await fetch(apiurl + `&appid=${apikey}`);
    let B = await A.json();
    console.log(B);
    temp.innerHTML = Math.round(B.main.temp) + ` °C`;
    humadity.innerHTML = `${B.main.humidity} %`;
    wind_speed.innerHTML = `${B.wind.speed} km/h`;
    // time.innerHTML = new Date().toLocaleDateString()
    let date = new Date();
    time.innerHTML = `${date.getHours()} : ${date.getMinutes()}`;
    city.innerText = event.value + " , " + B.sys.country;
    img.src = `http://openweathermap.org/img/wn/${B.weather[0].icon}@2x.png`;
  } catch (error) {}

  // // Time Funcation
  // setInterval(() => {
  //   let time = new Date();
  //   let hours = time.getHours();
  //   let minutes = time.getMinutes();
  //   // document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
  //   console.log(`${hours}:${minutes}`);
  //   let a = time === 0 ? "00" : `12 :${minutes}`;
  //   console.log(a);
  // }, 999);
}

// console.log(date);
// // let
// let day = date.getDay();
// let month = date.getMonth();
// let year = date.getFullYear();
