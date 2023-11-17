var cityList = [];



document.querySelector('input').addEventListener('change', (e)=>{
    e.preventDefault();
    fetch(`https://api.meteo.lt/v1/places`)
    .then((Response)=>data = Response.json())
    .then((data)=>{
    cityList = data;
    addOptions();
    }
    )
})

let addOptions = function(){
    let datalist = document.querySelector('datalist');
    
    for(let i = 0; i < cityList.length; i++){
        let option = document.createElement('option');
        option.value = cityList[i].name;
        datalist.appendChild(option);
    }

}