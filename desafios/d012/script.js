let res = document.querySelector('div#res')

function botao() {
    res.innerHTML = ''
    let anterior = Number(window.prompt(`Qual era o preço anterior do produto?`))
    let atual = Number(window.prompt(`Qual é o preço atual do produto?`))
    let caro =  `mais caro`
    let subiu = atual - anterior
    let barato = `mais barato`
    let baixou = anterior - atual
    let porcentagem_pos = ((atual - anterior)/anterior)*100
    let porcentagem_neg = ((anterior - atual)/atual)*100


    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava ${anterior.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} e agora custa ${atual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>`

    if (anterior < atual) {
        res.innerHTML += `<p>Hoje o produto está ${caro}</p>`
        res.innerHTML += `<p>O preço subiu ${subiu.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em relação ao anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porcentagem_pos.toFixed(2)}% pra cima</p>`
    } else {
        res.innerHTML += `<p>Hoje o produto está ${barato}</p>`
        res.innerHTML += `<p>O preço baixou ${baixou.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em relação ao anterior.</p>`
        res.innerHTML += `Uma variação de ${Math.abs (porcentagem_neg.toFixed(2))}% pra baixo`
    }


}


