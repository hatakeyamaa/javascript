let res = document.querySelector('div#res')

function botao() {
    let nome = String(window.prompt(`Qual o nome do aluno?`))
    let nota_1 =  Number(window.prompt(`Primeira nota de ${nome}:`))
    let nota_2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    let media = (nota_1 + nota_2)/2

    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas ${nota_1} e ${nota_2}, a <strong>média é ${media}</strong></p>`

    if(media >= 6.0) {
        res.innerHTML += `Com a média acima de 6,0, o aluno está <div id="apr">APROVADO</div>`
    } else if (media >= 3.0){
        res.innerHTML += `Com a média entre 3,0 e 6,0, o aluno está de <div id="rec">RECUPERAÇÃO</div>`
    } else {
        res.innerHTML += `Com média abaixo de 3,0, o aluno está <div id="rep">REPROVADO</div>`
    }
}