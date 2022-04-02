let res = document.querySelector('div#res')

function botao() {
    let anterior = Number(window.prompt(`Qual era o preço anterior do produto?`))
    let atual = Number(window.prompt(`Qual é o preço atual do produto?`))
    let caro = res.innerHTML = `mais caro`
    let barato = res.innerHTML = `mais barato`

    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava ${anterior.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} e agora custa ${atual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Hoje o produto está ${}</p>`
    res.innerHTML += `<p>O preço (subiu ou desceu) em relação ao preço anterior</p>`
    res.innerHTML += `<p>Uma variação de (porcentagem acima ou abaixo)</p>`

    if (preço(p)) {
    return caro
    } else {
    return barato
    }

}
   
    if (preço(anterior < atual)) {
    return true
    } else {
    return false
    }
