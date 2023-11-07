const form = document.querySelector("form");
const searchInput = document.querySelector("input[type=text]");
const wheather = document.querySelector(".weather")
const searchBox = document.querySelector(".search-box")


function getData(url) {
     return fetch(url)
    .then(res=>  res.json())
}
    
form.addEventListener("submit",search)
function search(e) {
    e.preventDefault()
    getData(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${searchInput.value}`)
    .then(data=>{
        console.log(data);
        wheather.innerHTML +=`
        <p class="city"> City:${data.location.name}</p>
        <p class="country">Contry:${data.location.country}</p>
        <p class="wheather-forecoast"> Weather Forecast:${data.current[searchBox.value]}</p>
        <p class="skycontion">Sky Condition:
         <span> <img src="${data.current.condition.icon}"></span> 
         <span>${data.current.condition.text}</span></p>

        `
    })
}