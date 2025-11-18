const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const reset = document.querySelector('.reset')
const counter_value = document.querySelector('.counter-value')
const paragraph = document.querySelector('p')


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
    if (i<0) {
        counter_value.style.color = 'red'
        paragraph.classList.add('red')
        paragraph.classList.remove('green')
        paragraph.classList.remove('gray')

    }else if (i>0) {
        counter_value.style.color = 'green'
        paragraph.classList.add('green')
        paragraph.classList.remove('red')
        paragraph.classList.remove('gray')
    }else {
        counter_value.style.color = 'gray'
        paragraph.classList.add('gray')
        paragraph.classList.remove('red')
        paragraph.classList.remove('green')

    }

    counter_value.textContent = i;

}


plus.addEventListener('click', counter)
minus.addEventListener('click', counter)
reset.addEventListener('click', counter)





