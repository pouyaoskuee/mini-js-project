const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const reset = document.querySelector('.reset')
const counter_value = document.querySelector('.counter-value')


let i = Number(counter_value.textContent)
//
// plus.addEventListener('click', () => {
//     i++
//     document.querySelector('.counter-value').textContent = i
// });
//
// minus.addEventListener('click', () => {
//     i--
//     document.querySelector('.counter-value').textContent = i
// })
//
// reset.addEventListener('click', () => {
//     i = 0
//     document.querySelector('.counter-value').textContent = i
// })



// بصورت فانکشنال

function counter (e){
    const classList = e.target.classList
    if (classList.contains('plus')) i++;
    else if (classList.contains('minus')) i--;
    else i=0;

    counter_value.textContent = i;

}


plus.addEventListener('click', counter)
minus.addEventListener('click', counter)
reset.addEventListener('click', counter)

