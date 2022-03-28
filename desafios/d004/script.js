function botao() {
    let prod = window.prompt('Que produto você está comprando?')
    let produto = String(prod)

    let pre = window.prompt(`Quanto custa ${produto} que você está comprando?`)
    let preç = Number(pre)
    let preço = preç.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    let val = window.prompt(`Qual o valor que você deu para pagar ${produto}?`)
    let valo = Number(val)
    let valor = valo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})


    let tro = valo - preç
    let troco = tro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    
    window.alert(`Você comprou um ${produto} que custou ${preço}.
    Deu ${valor} em dinheiro e vai receber ${troco}.
    Volte sempre!`)
}