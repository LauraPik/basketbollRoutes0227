// pasizymiu teksto ivedimo laukeli ir isvdimo 
let input = document.querySelector('#text');

let divEl = document.querySelector('.output');


// sukuriu šunkcijač kurioje prasuku cikla per ivesta teksto eilute nuo jos pabaigos
function reverseString() {
    let str = '';
    // tikrinu ar eilute maziau arba lygu 1
    if (input.value.length >= 1) {

        for (let i = input.value.length - 1; i >= 0; i--) {
            str += input.value[i];
        }
    }
    // isvedu atsakyma
    divEl.textContent = str;
}

input.addEventListener('keydown', reverseString);