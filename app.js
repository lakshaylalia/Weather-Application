const weatherPhotos = {
    "Patchy rain nearby": "assets/patchyRainNearby.avif",
    "Partly Cloudy": "assets/partlyCloudy.jpg",
    "Sunny": "assets/sunny.jpg",
    "Clear": "assets/clear.jpg",
    "Overcast": "assets/overcast.jpg",
    "Heavy rain": "assets/heavyRain.webp",
    "Light rain": "assets/lightRain.jpg",
    "Moderate rain": "assets/moderateRain.jpg",
    "Rain": "assets/rain.webp",
    "Heavy rain at times": "assets/heavyRainAtTimes.jpg",
    "Patchy light rain": "assets/patchyLight.jpg",
    "Patchy light rain with thunder": "assets/patchyLightRain.avif",
    "Thundery outbreak possible": "assets/thunderyOutbreakPossible.webp",
    "Patchy light drizzle": "assets/patchylightDrizzle.webp",
    "Mist": "assets/mist.jpg",
    "Fog": "assets/fog.jpg",
    "Freezing fog": "assets/freezingFog.jpg",
    "Blizzard": "assets/Blizzard.webp",
    "Ice pellets": "assets/icePellets.jpg",
    "Default": "assets/Default.jpg"
};

let weather;
let body = document.querySelector("body");

async function weatherCurr(region) {
    let url = `https://api.weatherapi.com/v1/current.json?key=12aba9c690b94f0e9b0110501240107&q=${region}&aqi=yes`;
    try {
        let response = await axios.get(url);
        return response.data.current.condition.text;
    } catch (error) {
        location.reload();
        return "Location not found";
    }
}

btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let region = document.getElementById("city").value;
    let result = await weatherCurr(region);
    alert(result);
    weather = result;
    let info=document.getElementById("info")
    info.innerHTML=`Weather Cndition : ${weather}`;
    document.querySelector("main").append(info);
    updateBackgroundImage();
});

let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    document.getElementById("city").value="";
    body.style.backgroundImage='url(assets/Default.jpg)';
    document.getElementById("info").innerHTML="";
})

window.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        let region = document.getElementById("city").value;
        let result = await weatherCurr(region);
        alert(result);
        weather = result;
        updateBackgroundImage();
        document.getElementById("city").value = "";
    }
});

function updateBackgroundImage() {
    console.log("Updating background image for weather:", weather);
    if (weather in weatherPhotos) {
        body.style.backgroundImage = `url(${weatherPhotos[weather]})`;
        console.log("Background image set to:", weatherPhotos[weather]);
    } else {
        body.style.backgroundImage = `url(${weatherPhotos["Default"]})`;
        console.log("Background image set to default.");
    }
}
