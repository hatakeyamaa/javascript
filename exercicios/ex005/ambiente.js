/*
function generateRange(n) {
    let range = [1 < 100];
    for (let i = 0; i < 100; i++) range[i] = i + 1;
    return false;
}
console.log(generateRange(1));
*/
var num = [1 <= 100]

let n = Number(num.value)
let numero = new Array(n)

if(numero.indexOf(n) != -1) {
    numero.push(n)
    let item = document.createElement('option')
    item.text = `O número ${n} foi adicionado`
    item.value = `res ${n}`
    res.appendChild(item)
} else if (numero.includes(n) > -1) { 
    window.alert(`O número já existe`)
}
