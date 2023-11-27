const ApiCity = () =>{
    //picking all h6 elements
    let h6El =document.querySelectorAll('h6');
    //picking all p elements with hours
    let pTimeEl = document.querySelectorAll('.time')
    //picking all p for temperature
    let pDegreeEl = document.querySelectorAll('.degree');
    
    

    let miestas = ['Kaunas', 'Vilnius', 'Alytus', 'Klaipeda']

    for(let i=0; i< miestas.length; i++){
    const vietos = fetch(`https://api.meteo.lt/v1/places/${miestas[i]}/forecasts/long-term`)
    .then(response => response.json() )
    .then(data =>{ 
        console.log(data)
    //Getting the city
    h6El[i].textContent = data.place.name;
    //geting full date
    let today = new Date();
    //correct year and month
    let month = today.getMonth()+1;
    let year = today.getFullYear();
    let date = today.getDate();
     //geting the correct hour and minutes
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let current_time = `${hours}:${minutes}`
    let current_date =`${year}-${month}-${date} ${hours}`
   
    
    //adding to inner p time text of current hour and minutes
    pTimeEl[i].textContent = current_time;

    //adding to inner p degree text of current hour and minutes
    const temp = data.forecastTimestamps[i].airTemperature
    pDegreeEl[i].textContent = temp;

    
    
})
    }
}


function addZero(num){
    return num < 10 ? `0${num}`:num;
}


ApiCity()
export default ApiCity
