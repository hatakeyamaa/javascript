let res = document.querySelector('div#res')

function botao() {
    let a = Number(window.prompt(`Qual o valor de a?`))
    let b = Number(window.prompt(`Qual o valor de b?`))
    let c = Number(window.prompt(`Qual o valor de c?`))

    let eq = `${a}x² + ${b}x + ${c} = 0`
    let delta = `&Lambda; = ${(b**2) - (4*a*c)}`
    let equação = `${((b**2) - (4*a*c))/2*a}`

    if(equação > 0) {
        return true
    } else {
        return false
    }

    res.innerHTML = `<p>Resolvendo Bhaskara</p>`
    res.innerHTML += `<p>A equação atual é ${eq}</p>`
    res.innerHTML += `<p>O cálculo realizado será ${delta}</p>`
    res.innerHTML += `<p>O valor calculado foi ()</p>`
}
