function botao() {
   let numero = window.prompt('Digite um número inteiro')
   let antes = Number(numero) - 1
   let depois = Number(numero) + 1

   window.alert(`O número antecessor de ${numero} é ${antes}.
   O número posterior de ${numero} é ${depois}`)
}