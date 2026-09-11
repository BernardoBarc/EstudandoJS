/*function bigode(n=0,m=0) {
    return n+m
}

let num = [4,6]
let res = bigode(num[0], num[1])
console.log(res)*/

//------------------------------------------------------------------------------

/*function fatorial (x) {
    if (x == 1) {
        return 1
    }else {
        return x * fatorial(x-1)
    }

}
console.log(fatorial(5))*/

//------------------------------------------------------------------------------

function testar (a) {
    if (a%2==0){
        return "Par"
    }else {
        return "Impar"
    }
}

let num = 10
let res = testar(num)
let msg = `O número ${num} é ${res}`
console.log(msg)