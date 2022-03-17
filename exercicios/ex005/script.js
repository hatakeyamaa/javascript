function adc() {
    var num = document.querySelector('input#numtxt')
    var res = document.querySelector('select#res1')

    if(num.value.length == 0 || num.value == 0) {
        window.alert('Digite um número entre 1 e 100')
    } else {
        let n = Number(num.value)

        if(n <= 100) {let item = document.createElement('option')
        item.text = `O número ${n} foi adicionado`
        item.value = `res ${n}`
        res.appendChild(item)
        }
        if(n > 100) {
            window.alert(`Digite um número menor que ${n}`)
        } else if(n) {
            window.alert('O número é inválido ou já foi adicionado')
        }
    }
}

/*
for(let n_adc = n; n_adc <= 100; n_adc = n) {
    let item = document.createElement('option')
    item.text = `O número ${n_adc} foi adicionado`
    item.value = `res ${n_adc}`
    res.appendChild(item)
}
*/