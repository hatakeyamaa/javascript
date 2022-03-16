function contar() {
    let ini = document.querySelector('input#initxt')
    let fim = document.querySelector('input#fimtxt')
    let passo = document.querySelector('input#passotxt')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        //window.alert('[ERRO] Impossível contar!')
    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido, considerando passo 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
             for (let c = i; c <= f; c+=p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
       
        res.innerHTML += ` \u{1F3C1}`
    }
}
