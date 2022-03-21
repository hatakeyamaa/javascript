/*
function generateRange(n) {
    let range = [1 < 100];
    for (let i = 0; i < 100; i++) range[i] = i + 1;
    return false;
}
console.log(generateRange(1));
*/   
function atualizar (num, n) {
    if (num.indexOf(n) === -1) {
        num.push(n);
        console.log('novo número é : ' + num);
    } else if (num.indexOf(n) > -1) {
        console.log(n + ' já existe.');
    }
}

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,];

atualizar(num, 30);
// Nova coleção de vegatais é : batata,tomate,pimenta,pimentao,espinafre
atualizar(num, 30);
// espinafre já existe na coleção de vegetais.