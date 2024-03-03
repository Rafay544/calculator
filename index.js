let random = Math.random()
let a = prompt("enter first number")
let b = prompt("enter operation")
let c = prompt("enter second number")

if (random > 0.1){
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    b = obj[b]
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}