function contar() {
    var ini = document.querySelector('input#in_num')
    var fim = document.querySelector('fim_num')
    var passo = document.querySelector('passo_num')
    var res = document.querySelector('div#res')

    

    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    }

    for (ini >= 0; fim == fim.value; passo) {
        res.innerHTML = `contando`
    }
}
