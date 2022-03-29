let res = document.querySelector('div#res')
let negrito = document.querySelector('div#negrito')

function botao() {
    let distancia = parseFloat(window.prompt(`Digite uma distância em metros(m)`))
    
    negrito.innerHTML = `A distância de ${distancia} metros, corresponde a...`
    negrito.style.fontWeight = 'bolder'
    negrito.style.fontSize = '20px'

    res.innerHTML = `${(distancia / 1000).toLocaleString('pt-BR')} quilômetros (Km)`
    res.innerHTML += `<p>${(distancia / 100).toLocaleString('pt-BR')} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${(distancia / 10).toLocaleString('pt-BR')} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${(distancia * 10).toLocaleString('pt-BR')} decímetros (dm)</p>`
    res.innerHTML += `<p>${(distancia * 100).toLocaleString('pt-BR')} centímetros (cm)</p>`
    res.innerHTML += `<p>${(distancia * 1000).toLocaleString('pt-BR')} milímetros (mm)</p>`
}