let numero = document.querySelector('input#numtxt')
let lista = document.querySelector('select#res1')
let res = document.querySelector('div#res2')
let num = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adc() {
    if(isNum(numero.value) && !inLista(numero.value, num)) {
        num.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `O número ${numero.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado')
    }
        numero.value = ''
        numero.focus()
} 

function final() {
    if (num.length == 0) {
        window.alert(`Digite um valor no campo acima.`)
    } else {
    total = num.length

    let soma = 0
    for(let s = 0; s < num.length; s++) {
        soma += num[s]
    }

    let maior_valor = num[0]
    let menor_valor = num[0]

    for(let i in num) {
        if(num[i] > maior_valor) {
            maior_valor = num[i]
        } else if(num[i] < menor_valor) {
            menor_valor = num[i]
        }
    }

    let media = 0
    media = soma / total

    res.innerHTML = `<p>Ao todo temos ${total} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior_valor}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor_valor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

/*
function finalizar() {
    let soma = 0
    for(let s = 0; s < num.length; s++) {
        soma += num[s]
    }

    let posicao_maior = num
    let posicao_menor = num

    for(let i = 0; i < num; i++) {
        if(num[i] > num[posicao_maior]){
            posicao_maior = i
        } else if(num[i] < num[posicao_menor]){
            posicao_menor = i
        }
    }

    res2.innerHTML = `<p>Ao todo temos ${num.length} números cadastrados</p> 
    <p>O maior valor informado foi ${posicao_maior}</p> 
    <p>O menor valor informado foi </p> 
    <p>Somando todos os valores, temos ${soma}</p> 
    <p>A média dos valores digitados é </p>`
}




    

























/*

    if(num.value.length == 0 || num.value == 0) {
        window.alert('Digite um número entre 1 e 100')
    } else {
        let n = Number(num.value)
        let numero = []
        numero.push(n)

        if(1 <= n) {
            
            let item = document.createElement('option')
            res.appendChild(item)
            item.text = `O número ${n} foi adicionado`
        } /*
            if(numero.indexOf(n) === -1) {
                item.text = `O número ${n} foi adicionado`
                item.value = `res ${n}`
            } else if (numero.indexOf(n) > -1) { 
            window.alert(`O número já existe`)
        }
        */
         

         

/*
        if(n <= 100) {let item = document.createElement('option')
        item.text = `O número ${n} foi adicionado`
        item.value = `res ${n}`
        res.appendChild(item)
        } else if(n > 100) {
            window.alert(`Digite um número menor que ${n}`)
        }
    }*/


