function adc() {
    let numero = document.querySelector('input#numtxt')
    let res = document.querySelector('select#res1')

    let n = Number(numero.value)
    //let num = [1, 2, 3]

        if (num.indexOf(n) === -1) {
            num.push(n);
            let item = document.createElement('option')
            res.appendChild(item)
            item.text = `O número ${n} foi adicionado`
        } else if (num.indexOf(n) > -1) {
            window.alert(`O número já existe`)  
        }
        




    

























/*

    if(num.value.length == 0 || num.value == 0) {
        window.alert('Digite um número entre 1 e 100')
    } else {
        let n = Number(num.value)
        let numero = []
        numero.push(n)

        if(1 <= n) {
            
            let item = document.createElement('option')
            res.appendChild(item)
            item.text = `O número ${n} foi adicionado`
        } /*
            if(numero.indexOf(n) === -1) {
                item.text = `O número ${n} foi adicionado`
                item.value = `res ${n}`
            } else if (numero.indexOf(n) > -1) { 
            window.alert(`O número já existe`)
        }
        */
         

         

/*
        if(n <= 100) {let item = document.createElement('option')
        item.text = `O número ${n} foi adicionado`
        item.value = `res ${n}`
        res.appendChild(item)
        } else if(n > 100) {
            window.alert(`Digite um número menor que ${n}`)
        }
    }*/
}

