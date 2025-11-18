const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const reset = document.querySelector('.reset')
const counter_value = document.querySelector('.counter-value')


let i = 0

plus.addEventListener('click', () => {
    i++
    document.querySelector('.counter-value').innerText = i
});

minus.addEventListener('click', () => {
    i--
    document.querySelector('.counter-value').innerText = i
})

reset.addEventListener('click', () => {
    i = 0
    document.querySelector('.counter-value').innerText = i
})