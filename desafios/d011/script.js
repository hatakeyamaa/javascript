let res = document.querySelector('div#res');

function botao() {
    let ano = Number(window.prompt(`Qual é o ano que você quer verificar?`));
    let bis = res.innerHTML = 'É bissexto';
    let n_bis = res.innerHTTML = 'Não é bissexto';

    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`;
    
    if(anobi(ano)) {
        res.innerHTML += `O ano de ${ano} ${bis}`;
    } else {
        res.innerHTML += `O ano de ${ano} ${n_bis}`;
    }


    //multiplo de 400
    
}

function anobi(a) {
       if ((a % 100 === 0 && a % 400 === 0) || (a % 100 && a % 4 === 0)) {
           return true;
       } else {
           return false;
       }
    }