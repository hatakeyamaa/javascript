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
        window.alert('Tudo ok')
    } else {
        window.alert('Valor inválido ou já encontrado')
    }
  





    
    /*
        if(numero.value.length == 0 || numero.value == 0) {
        window.alert('Digite um número entre 1 e 100')
        }
        if (num.indexOf(n) === -1) {
            num.push(n);
            let item = document.createElement('option')
            lista.appendChild(item)
            item.text = `O número ${n} foi adicionado`
        } else if (num.indexOf(n)) {
            window.alert(`O número já existe`)  
        }
        */
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


