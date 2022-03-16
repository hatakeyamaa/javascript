/*
var n = 4
var f = n*10
var p = n

for (n > 0; n <= f; n += p) {
    console.log(n)
}
*/

function gerar() {
    let num = document.querySelector('input#numtxt')
    let res = document.querySelector('select#listatxt')
    
    if (num.value.length == 0) {
        window.alert('[ERRO] você precisa digitar um número!') 
        
    } else {
        let n = Number(num.value)
        c = 1
        res.innerHTML = ''

        for (c > 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `res ${c}`
            res.appendChild(item)
        }

        /*
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
        */
     
    }
}
