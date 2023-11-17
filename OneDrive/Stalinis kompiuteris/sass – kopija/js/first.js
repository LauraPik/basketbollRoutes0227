// https://strangerthings-quotes.vercel.app/api/quotes/50

var commentList = [];



document.querySelector('.carousel-control-next').addEventListener('click', (e)=>{
    e.preventDefault();
    fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
    .then((Response)=>data = Response.json())
    .then((data)=>{
        console.log(data)
    commentList = data;
    addOptions();
    }
    )
})

let addOptions = function(){
    let datalist = document.querySelector('.carousel-inner');
    
    for(let i = 0; i < commentList.length; i++){
        let div = document.createElement('div');
        div.className = "carousel-item";
        datalist.appendChild(div);
        let h1 = document.createElement('h1');
        h1.id = "third";
        h1.innerText = commentList[i].quote;
        div.appendChild(h1);
    }

}

