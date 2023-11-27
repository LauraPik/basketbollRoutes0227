

import ApiCity from "./ApiCity";
 
let imgTagEl = document.querySelectorAll(' img')
 
imgTagEl[0].src = "css/icons/clear.png"

 console.log(imgTagEl.src)
 
 function getWeatherIcon(conditionCode) { 
for(let i=0; i< imgTagEl.length; i++){
    if (conditionCode === "clear") {  
        
        let clearIcon = imgTagEl.innerHTML ="⛅"
        return clearIcon;   } 
    else if (conditionCode === "isolated-clouds") {    
        return "⛅";   
    } 
    else if (conditionCode === "scattered-clouds" || conditionCode === "overcast" || conditionCode ==="cloudy") {     
        return "☁️";   } 
    else if (conditionCode === "light-rain" || conditionCode === "moderate-rain" || conditionCode === "heavy-rain") {     
        return "🌧️";   } 
    else if (conditionCode === "sleet" || conditionCode === "light-snow" || conditionCode === "moderate-snow" || conditionCode === "heavy-snow") {     
        return "🌨️";  
    } else if (conditionCode === "fog") {    
    return "🌫️";   } else {     
        return "❓";   } }
 }
export default getWeatherIcon()