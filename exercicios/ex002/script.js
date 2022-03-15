function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <= 2) {
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if(idade <= 12){
                img.setAttribute('src', 'img/foto-criança-m.png')
            } else if(idade < 18) {
                img.setAttribute('src', 'img/foto-adolescente-m.png')
            } else if(idade < 31) {
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if(idade < 60){
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 2) {
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if(idade <= 12){
                img.setAttribute('src', 'img/foto-criança-f.png')
            } else if(idade < 18) {
                img.setAttribute('src', 'img/foto-adolescente-f.png')
            } else if(idade < 31) {
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if(idade < 60){
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
