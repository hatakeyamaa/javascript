let res = document.querySelector('div#res')

function botao() {
    let a = Number(window.prompt(`Qual o valor de a?`))
    let b = Number(window.prompt(`Qual o valor de b?`))
    let c = Number(window.prompt(`Qual o valor de c?`))

    let eq = `${a}x² + ${b}x + ${c} = 0`
    let delta = ((b**2) - (4*a*c))
    let x1 = `${((-b)**2 + (Math.sqrt(delta)))/2*a}`
    let x2 = `${((-b)**2 - (Math.sqrt(delta)))/2*a}`

    res.innerHTML = `<p>Resolvendo Bhaskara</p>`
    res.innerHTML += `<p>A equação atual é ${eq}</p>`
    res.innerHTML += `<p>O cálculo realizado será &Lambda; = ${delta}</p>`
    res.innerHTML += `<p>O valor calculado foi <mark>x1 = ${x1} e x2 = ${x2}</mark></p>`

    /*
    if(x1 > 0 && x2 < 0) {
        return x1
    } else {
        return x2
    }
    */
}
