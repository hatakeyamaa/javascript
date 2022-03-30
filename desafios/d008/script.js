let res = document.querySelector('div#res')

function botao() {
    let produto = window.prompt(`Qual é o produto que você está comprando?`)
    let preço =  Number(window.prompt(`Qual é o preço de ${produto}?`))
    let desconto = ((preço * 10)/100)

    res.innerHTML = `<p>Calculando desconto de 10% para ${produto}</p>`
    res.innerHTML += `<p>O preço original era ${preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${(preço - desconto).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${produto}</p>`
}