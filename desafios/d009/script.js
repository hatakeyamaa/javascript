let res = document.querySelector('div#res')

function botao() {
    let nome = window.prompt(`Qual o nome do funcionário?`)
    let salário = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let percentual = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let aumento = ((salário*percentual)/100)

    res.innerHTML = `<p>${nome} recebeu um aumento salarial!</p>`
    res.innerHTML += `<p>O salário atual era ${salário.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Com um aumento de ${percentual}, o salário vai aumentar ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${(salário + aumento).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.</p>`
}