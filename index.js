let btnOne = document.querySelector('#buttonOne')
let btnTwo = document.getElementById('buttonTwo')
let btnThree = document.getElementById('buttonThree')
let btnFour = document.getElementById('buttonFour')
let btnFive = document.getElementById('buttonFive')
let submit = document.querySelector('#submit')
let resultado = document.querySelector('#resultado')

let block = document.querySelector('#state')
let esconde = document.querySelector('#esconde')
block.className = 'hide'

btnOne.addEventListener("click", function(event) {
    const botaoUm = document.querySelector("#buttonOne").value
    resultado.innerHTML = botaoUm
    showButton()
})

btnTwo.addEventListener("click", function() {
    const botaoDois = document.querySelector('#buttonTwo').value
    resultado.innerHTML = botaoDois
    showButton()
})

btnThree.addEventListener("click", function() {
    const botaoTres = document.querySelector('#buttonThree').value
    resultado.innerHTML = botaoTres
    showButton()
})

btnFour.addEventListener("click", function() {
    const botaoQuatro = document.querySelector('#buttonFour').value
    resultado.innerHTML = botaoQuatro
    showButton()
})

btnFive.addEventListener("click", function() {
    const botaoCinco = document.querySelector('#buttonFive').value
    resultado.innerHTML = botaoCinco
    showButton()
})

function showButton() {
    submit.addEventListener('click', enviar, false)

    function enviar() {
        esconde.className = 'hide'
        block.className = block.className.replace('hide', 'show');
    }
}