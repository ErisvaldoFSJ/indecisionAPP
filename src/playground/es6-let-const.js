let nomeLet = 'janny'
nomeLet = 'janny2'

console.log('nomeLet',nomeLet)

const nomeConst = 'Eli'
console.log('nomeConst', nomeConst)

// block scoping

var FullName = 'andrew mead'

if(FullName){
    var frisName = FullName.split(' ')[0]
    console.log(frisName)
}
console.log(frisName)