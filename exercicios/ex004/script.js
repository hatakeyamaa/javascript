function gerar() {
    var num = document.querySelector('input#numtxt')
    var res = document.querySelector('select#listatxt')

    if (num.value.length == 0 || num.value == 0) {
        window.alert('digite um número acima de 0 para multiplicar!')
    } else {
        let n = Number(num.value)
        let c = 1

        res.innerHTML = ''

        for (c > 0; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `res ${c}`
        res.appendChild(item)
        }
    }
}