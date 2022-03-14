function carregar() {
    var msg = document.querySelector('div.msg')
    var img = document.querySelector('img.imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#be8658'
        // BOM DIA
    } else if(hora > 12 && hora <= 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#d86f1a'
        // BOA TARDE
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#1a2029'
        // BOA NOITE
    }

}

