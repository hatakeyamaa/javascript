/*
var n = 4
var f = n*=10
var p = n

for (n > 0; n >= f; n += p) {
    console.log(n)
}
*/

var n = 2
var f = n*=10
var p = n
while (n <= f) {
    console.log(n)
    n+=p
}
