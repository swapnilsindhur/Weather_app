let search = document.getElementById("search-icon")
let weatherImg = document.querySelector(".cond-img img")
let deg = document.querySelector(".deg")
let city = document.querySelector(".city")
let hum = document.querySelector(".hum-data")
let windSpeed = document.querySelector(".speed-data")
const apiKey = "94703aaf25ea6efeccd11557f0dc245f"

search.addEventListener('click',(event)=>{
    let search_data = document.querySelector(".search-data").value
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_data}&appid=${apiKey}&units=metric`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        city.innerHTML = data.name 
        deg.innerHTML = data.main.temp + " °C"
        hum.innerHTML= data.main.humidity + " %"
        windSpeed.innerHTML= data.wind.speed + " km/hr"
        let condition = data.weather[0].main
        if(condition == "Smoke") condition="Mist"
        if(condition == "Haze") condition="Mist"
        weatherImg.src=`images/${condition}.png`
        document.querySelector(".hidden").style.display="flex";
        document.querySelector(".card").style.height="85%";
        document.querySelector(".search").style.height="10%";
        document.querySelector(".invalid").style.display = "none";
    })
    .catch((error)=>{
        document.querySelector(".hidden").style.display="none";
        document.querySelector(".card").style.height="20%";
        document.querySelector(".search").style.height="60%";
        document.querySelector(".invalid").style.display = "block";
        return error})
    
})

// if(city == "")