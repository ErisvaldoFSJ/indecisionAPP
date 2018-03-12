const square = function(x){
    return x*x
}

//const squareArrow = (x)=>{
//    return x * x
//}

const squareArrow = (x)=> x * x

console.log(square(9))
console.log(squareArrow(9))

const firstName = (fullName)=>{
    return fullName.split(' ')[0]
}

const firstName2 = (fullName)=> fullName.split(' ')[0]

let nome = 'mike teste'
console.log(firstName(nome))
console.log(firstName2(nome))

