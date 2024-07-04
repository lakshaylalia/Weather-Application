let weather;
let body=document.querySelector("body");
 async function weatherCurr(region){
    let url=`http://api.weatherapi.com/v1/current.json?key=12aba9c690b94f0e9b0110501240107&q=${region}&aqi=yes`;
    try{
    let response =await axios.get(url);
    return response.data.current.condition.text
    }
    catch(error){
        location.reload();
        
        return "Location not found"
    }
 }

btn=document.querySelector("button")

btn.addEventListener("click",async ()=>{
    let region=document.getElementById("city").value
    let result=await weatherCurr(region);
    alert(result)
    weather=result;
    document.getElementById("city").value="";

    switch (weather){
        case "Patchy rain nearby":
            body.style.backgroundImage='url(assets/patchyRainNearby.avif)';
         break;
        case "Partly cloudy":
            body.style.backgroundImage='url(assets/partlyCloudy.jpg)'
            break;
        case "Sunny":
            body.style.backgroundImage=' url(assets/sunny.jpg)'
            break;
        case "Clear":
            body.style.backgroundImage='url(assets/clear.jpg)'
            break;
        case "Overcast":
            body.style.backgroundImage='url(assets/overcast.jpg)'
            break;
        case "Heavy rain":
            body.style.backgroundImage='url(assets/heavyRain.webp)'
            break;
        case "Light rain":
            body.style.backgroundImage='url(assets/lightRain.jpg)'
            break;
        case "Moderate rain":
            body.style.backgroundImage='url(assets/moderateRain.jpg)'
            break;
        case "Rain":
            body.style.backgroundImage='url(assets/rain.webp)'
            break;
        case "Heavy rain at times":
            body.style.backgroundImage='url(assets/heavyRainAtTimes.jpg)'
            break;
        case "Light rain shower":
            body.style.backgroundImage='url(assets/lightRainShower.jpg)'
            break;
        case "Moderate or heavy rain shower":
            body.style.backgroundImage='url(assets/moderateorheavyrain.webp)'
            break;
        case "Patchy rain possible":
            body.style.backgroundImage='url(assets/patchyRainPossible.jpg)'
            break;
        case "Patchy light rain":
            body.style.backgroundImage='url(assets/patchyLight.jpg)'
            break;
        case "Patchy light rain with thunder":
            body.style.backgroundImage='url(assets/patchyLightRain.avif)'
            break;
        case "Thundery outbreaks possible":
            body.style.backgroundImage='url(assets/thunderyOutbreakPossible.webp)'
            break;
        case "Patchy light drizzle":
            body.style.backgroundImage='url(assets/patchylightDrizzle.webp)'
            break;
        case "Mist":
            body.style.backgroundImage='url(assets/mist.jpg)'
            break;
        case "Fog":
            body.style.backgroundImage='url(assets/fog.jpg)'
            break;
        case "Freezing fog":
            body.style.backgroundImage='url(assets/freezingFog.jpg)'
            break;
        case "Blizzard":
            body.style.backgroundImage='url(assets/Blizzard.webp)'
            break;
        case "Ice pellets":
            body.style.backgroundImage='url(assets/icePellets.jpg)'
            break;

        default:
            body.style.backgroundImage='url(assets/Default.jpg)';
            break;
    }
})

let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    document.getElementById("city").value="";
    body.style.backgroundImage='url(assets/Default.jpg)';
})

window.addEventListener(("keydown"),async (e)=>{
    if(e.key=="Enter"){
        let region=document.getElementById("city").value
    let result=await weatherCurr(region);
    alert(result)
    weather=result;
    document.getElementById("city").value="";

    switch (weather){
        case "Patchy rain nearby":
            body.style.backgroundImage='url(assets/patchyRainNearby.avif)';
         break;
        case "Partly cloudy":
            body.style.backgroundImage='url(assets/partlyCloudy.jpg)'
            break;
        case "Sunny":
            body.style.backgroundImage=' url(assets/sunny.jpg)'
            break;
        case "Clear":
            body.style.backgroundImage='url(assets/clear.jpg)'
            break;
        case "Overcast":
            body.style.backgroundImage='url(assets/overcast.jpg)'
            break;
        case "Heavy rain":
            body.style.backgroundImage='url(assets/heavyRain.webp)'
            break;
        case "Light rain":
            body.style.backgroundImage='url(assets/lightRain.jpg)'
            break;
        case "Moderate rain":
            body.style.backgroundImage='url(assets/moderateRain.jpg)'
            break;
        case "Rain":
            body.style.backgroundImage='url(assets/rain.webp)'
            break;
        case "Heavy rain at times":
            body.style.backgroundImage='url(assets/heavyRainAtTimes.jpg)'
            break;
        case "Light rain shower":
            body.style.backgroundImage='url(assets/lightRainShower.jpg)'
            break;
        case "Moderate or heavy rain shower":
            body.style.backgroundImage='url(assets/moderateorheavyrain.webp)'
            break;
        case "Patchy rain possible":
            body.style.backgroundImage='url(assets/patchyRainPossible.jpg)'
            break;
        case "Patchy light rain":
            body.style.backgroundImage='url(assets/patchyLight.jpg)'
            break;
        case "Patchy light rain with thunder":
            body.style.backgroundImage='url(assets/patchyLightRain.avif)'
            break;
        case "Thundery outbreaks possible":
            body.style.backgroundImage='url(assets/thunderyOutbreakPossible.webp)'
            break;
        case "Patchy light drizzle":
            body.style.backgroundImage='url(assets/patchylightDrizzle.webp)'
            break;
        case "Mist":
            body.style.backgroundImage='url(assets/mist.jpg)'
            break;
        case "Fog":
            body.style.backgroundImage='url(assets/fog.jpg)'
            break;
        case "Freezing fog":
            body.style.backgroundImage='url(assets/freezingFog.jpg)'
            break;
        case "Blizzard":
            body.style.backgroundImage='url(assets/Blizzard.webp)'
            break;
        case "Ice pellets":
            body.style.backgroundImage='url(assets/icePellets.jpg)'
            break;

        default:
            body.style.backgroundImage='url(assets/Default.jpg)';
            break;
    }
    }
})