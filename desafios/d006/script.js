let negrito = document.querySelector('div#negrito')
let res = document.querySelector('div#res')

function botao() {
    let C = Number(window.prompt(`Digite uma temperatura em ºC (Celsius)`))

    negrito.innerHTML = `A temperatura de ${C}ºC (Graus), corresponde a...`
    negrito.style.fontWeight = 'bolder'
    negrito.style.fontSize = '20px'

    let K = (C + 273.5).toLocaleString('pt-BR')
    let F = (C * 1.8 + 32).toLocaleString('pt-BR')

    res.innerHTML = `${K}ºK (Kelvin)`
    res.innerHTML += `<p>${F}ºF (Fahrenheit)</p>`
}