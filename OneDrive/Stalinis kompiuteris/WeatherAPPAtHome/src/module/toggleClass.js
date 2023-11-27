let searchEl = document.querySelector('input');
let sectionOneElm = document.querySelector('#hide');


const displayToggle = () =>{
    searchEl.addEventListener('input', () =>{
        if(searchEl.value ===''){
            sectionOneElm.style.display= 'inline'
        }
        else if(searchEl.value.length == 0){

            sectionOneElm.style.display= 'inline'
        }
        else{
            sectionOneElm.style.display= 'none'
        }
    })
}


displayToggle()
export default displayToggle

let imgone = document.querySelectorAll('img');
imgone[0].src = "https://icons8.com/icon/cWfpk9mCJWJm/summer"