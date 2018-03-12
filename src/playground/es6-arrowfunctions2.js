const add = (a,b) =>{
   // console.log(arguments)
    return a + b 
}


console.log(add(33,55))

const user = {
    name:'Erisvaldo',
    cities: ['marcolandia', 'araripina', 'dublin'],
    printPlacesLived(){
       return this.cities.map((city)=> this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlacesLived())

const mutiplier = {
    numbers: [10,20,30],
    mutiplyBy: 3,
    multiply(){
        return this.numbers.map((number)=> number * this.mutiplyBy)
    }
}
console.log(mutiplier.multiply())