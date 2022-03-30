let dolar = Number(window.prompt(`Quanto está a cotação do dólar agora?`))
let res = document.querySelector('div#res')

function botao() {
    let rs = Number(window.prompt(`Quantos reais você possui?`))

    let cotação = (rs / dolar)

    res.innerHTML = `<h2>Conversão de Reais para Dólares</h2>`
    res.innerHTML += `Você pode comprar ${cotação.toLocaleString('en-US', {style:'currency', currency: 'USD'})} com o que possui de Reais`
}