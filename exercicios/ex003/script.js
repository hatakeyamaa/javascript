function contar() {
    let ini = document.querySelector('input#initxt')
    let fim = document.querySelector('input#fimtxt')
    let passo = document.querySelector('input#passotxt')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0) {
        window.alert('[ERRO] Digite um número')
    } else {
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)

        res.innerHTML = ''

        if (p <= 0){
            window.alert('Passo inválido, considerando 1')
            p = 1
        }
        } if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += (`${c} \u{1F449}`)
            } 
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += (`${c} \u{1F449}`)
            }
        }
        res.innerHTML += '\u{1F3C1}'
}