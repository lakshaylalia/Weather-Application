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
    region=document.getElementById("city").value
    let result=await weatherCurr(region);
    alert(result)
    document.getElementById("city").value="";
})

let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    document.getElementById("city").value="";
})

