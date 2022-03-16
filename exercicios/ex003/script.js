function contar() {
    var ini = 1//document.querySelector('input#in_num')
    var fim = 10//document.querySelector('fim_num')
    var passo = 2//document.querySelector('passo_num')
    var res = document.querySelector('div#res')
/*
    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } */
    for (ini >= 0; ini <= fim; ini+=passo) {
        console.log(`o resultado é ${ini}`)
    }
}
