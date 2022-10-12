//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//Key::ece808a5a6595655638bd2d9e07dabbd

const weatherapi={
    key:"ece808a5a6595655638bd2d9e07dabbd",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?q"
}

const searchbox=document.querySelector('.location')
const search=document.querySelector('button')
search.addEventListener('click',async (e)=>{
   const city=searchbox.value
   const weather=await axios.get(`${weatherapi.baseUrl}=${city}&appid=${weatherapi.key}`)
   console.log(weather)
   const place=document.querySelector('.place')
   place.innerText=`Weather in ${weather.data.name},${weather.data.sys.country}`
   const temperature=document.querySelector('.temperature')
   temperature.innerText=`${Math.round(weather.data.main.temp-273)}°C`
   const weathertype=document.querySelector('.description')
   weathertype.innerText=`Weather Type: ${weather.data.weather[0].main}`
   const humidity=document.querySelector('.humidity')
   humidity.innerText=`Humidity: ${weather.data.main.humidity}`
   const wind=document.querySelector('.wind')
   wind.innerText=`Wind Speed: ${weather.data.wind.speed} mph`
   document.body.style.backgroundImage =`url(https://source.unsplash.com/1600x900/?${city})`;
})

searchbox.addEventListener('keyup', async (e)=>{
    e.preventDefault()
    if(e.key=='Enter'){
        const city=searchbox.value
        const weather=await axios.get(`${weatherapi.baseUrl}=${city}&appid=${weatherapi.key}`)
        console.log(weather)
        const place=document.querySelector('.place')
        place.innerText=`Weather in ${weather.data.name},${weather.data.sys.country}`
        const temperature=document.querySelector('.temperature')
        temperature.innerText=`${Math.round(weather.data.main.temp-273)}°C`
        const weathertype=document.querySelector('.description')
        weathertype.innerText=`Weather Type: ${weather.data.weather[0].main}`
        const humidity=document.querySelector('.humidity')
        humidity.innerText=`Humidity: ${weather.data.main.humidity}`
        const wind=document.querySelector('.wind')
        wind.innerText=`Wind Speed: ${weather.data.wind.speed} mph`
        document.body.style.backgroundImage =`url(https://source.unsplash.com/1600x900/?${city})`;  
    }
})



