function adc() {
    let num = document.querySelector('input#numtxt')
    let res = document.querySelector('select#res1')

    if(num.value.length == 0 || num.value == 0) {
        window.alert('Digite um número entre 1 e 100')
    } else {
        let n = Number(num.value)
        numero = new Array(n)

        if(numero.indexOf(n) === -1) {
            numero.push(n)
            let item = document.createElement('option')
            item.text = `O número ${n} foi adicionado`
            item.value = `res ${n}`
            res.appendChild(item)
        } else if (numero.indexOf(n) > -1) { 
            item.text = `O número já existe`
        }
/*
        if(n <= 100) {let item = document.createElement('option')
        item.text = `O número ${n} foi adicionado`
        item.value = `res ${n}`
        res.appendChild(item)
        } else if(n > 100) {
            window.alert(`Digite um número menor que ${n}`)
        }*/
    }
}

