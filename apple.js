const outputNode = document.querySelector('.sl7-input')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const btn7 = document.querySelector('.btn7')
const btn8 = document.querySelector('.btn8')
const btn9 = document.querySelector('.btn9')
const search = document.querySelector('.sl7-search')

btn1.addEventListener('click', ( ) => {
    outputNode.value = 'iPhone'
})
btn2.addEventListener('click', ( ) => {
    outputNode.value = 'Charger'
})
btn3.addEventListener('click', ( ) => {
    outputNode.value = 'Gift'
})
btn4.addEventListener('click', ( ) => {
    outputNode.value = 'Google Pixel 3'
})
btn5.addEventListener('click', ( ) => {
    outputNode.value = 'Keyboard'
})
btn6.addEventListener('click', ( ) => {
    outputNode.value = '13 Pro Max'
})
btn7.addEventListener('click', ( ) => {
    outputNode.value = 'iPhone 12'
})
btn8.addEventListener('click', ( ) => {
    outputNode.value = 'Laptop'
})
btn9.addEventListener('click', ( ) => {
    outputNode.value = 'Mobile'
})

search.addEventListener('click', () => {
    outputNode.value = ''
})
