let display = document.querySelector('#display')
let btPrevious = document.querySelector('#previous')
let btZero = document.querySelector('#zero')
let btOne = document.querySelector('#one')
let btTwo = document.querySelector('#two')
let btTree = document.querySelector('#tree')
let btFour = document.querySelector('#four')
let btFive = document.querySelector('#five')
let btSix = document.querySelector('#six')
let btSeven = document.querySelector('#seven')
let btEight = document.querySelector('#eight')
let btNine = document.querySelector('#nine')
let btStart = document.querySelector('#start')
let btPoint = document.querySelector('#point')
let btAddition = document.querySelector('#addition')
let btSubtraction = document.querySelector('#subtraction')
let btMultiplication = document.querySelector('#multiplication')
let btDivision = document.querySelector('#division')
let btCalc = document.querySelector('#calc')
let btPorcentage = document.querySelector('#porcentage')
let btSquareRoot = document.querySelector('#squareRoot')
let btMrc = document.querySelector('#mrc')
let btMmais = document.querySelector('#mMais')
let btMmenos = document.querySelector('#mMenos')

let handleNumberButtonClick = (event) => {
    if(display.innerText.length < 9){
        if(display.innerText === '0'){
            display.innerHTML = event.target.innerText    
        }else{
            display.innerHTML += event.target.innerText
        }
    }
}
btStart.addEventListener('click', ()=>{
    btStart = '0'
    display.innerHTML = btStart
})  
btPrevious.addEventListener('click', ()=>{
    let resultado = display.innerText
    display.innerText = resultado.substring(0, resultado.length-1)
})
btZero.addEventListener('click', handleNumberButtonClick)
btOne.addEventListener('click', handleNumberButtonClick)
btTwo.addEventListener('click', handleNumberButtonClick)
btTree.addEventListener('click', handleNumberButtonClick)
btFour.addEventListener('click', handleNumberButtonClick)
btFive.addEventListener('click', handleNumberButtonClick)
btSix.addEventListener('click', handleNumberButtonClick)
btSeven.addEventListener('click', handleNumberButtonClick)
btEight.addEventListener('click', handleNumberButtonClick)
btNine.addEventListener('click', handleNumberButtonClick)

btPoint.addEventListener('click', ()=>{
    let lastChar = display.innerText[display.innerText.length - 1]
    if(lastChar === '.' || lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '/'){
        display.innerText = display.innerText.slice(0, -1) + '.'
    }else{
        if(display.innerText.length !== '0'){
            btPoint = '.'
            display.innerHTML += btPoint 
        } 
    }   
})
btAddition.addEventListener('click', ()=>{
    let lastChar = display.innerText[display.innerText.length - 1]
    if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '/' || lastChar === '.'){
        display.innerText = display.innerText.slice(0, -1) + '+' 
    }else if(lastChar !== '+'){
        display.innerText += '+'
    }    
})
btSubtraction.addEventListener('click', ()=>{
    let lastChar = display.innerText[display.innerText.length - 1]
    if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '/' || lastChar === '.'){
        display.innerText = display.innerText.slice(0, -1) + '-' 
    }else if(lastChar !== '-'){
        display.innerText += '-'
    }    
})
btMultiplication.addEventListener('click', ()=>{
    let lastChar = display.innerText[display.innerText.length - 1]
    if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '/' || lastChar === '.'){
        display.innerText = display.innerText.slice(0, -1) + 'x' 
    }else if(lastChar !== 'x'){
        display.innerText += '*'
    }    
})
btDivision.addEventListener('click', ()=>{
    let lastChar = display.innerText[display.innerText.length - 1]
    if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '/' || lastChar === '.'){
        display.innerText = display.innerText.slice(0, -1) + '/' 
    }else if(lastChar !== '/'){
        display.innerText += '/'
    }    
})
btCalc.addEventListener('click', ()=>{
    let resultado = display.innerText
    if(resultado){
        display.innerText = eval(resultado)
    }  
})
btPorcentage.addEventListener('click', ()=>{
    let resultado = display.innerText
    if(resultado){
        display.innerText = eval(resultado)/100
    }  
})
btSquareRoot.addEventListener('click',()=>{
    let resultado = display.innerText
    if(resultado){
         res = Math.sqrt(eval(resultado))
         display.innerText = res.toFixed(2)
    }
})
let store = '0'
btMrc.addEventListener('click', ()=>{
    display.innerText = store     
})
// APAGAR NÚMERO ARMAZENADO
btMrc.addEventListener('dblclick', ()=>{
    store = '0'
    display.innerText = store
})
btMmais.addEventListener('click', ()=>{
    if(display.innerText === '0'){
        store = display.innerText
    }else{
        store += '+' + display.innerText 
    }
    store = eval(store)
})
btMmenos.addEventListener('click', ()=>{
    if(display.innerText === '0'){
        store = display.innerText
    }else{
        store += '-' + display.innerText 
    }
    store = eval(store)
    if (store < 0){
        store = 0
    }
})
