let nome = ['Guilherme', 'Joao', 'Luana', 'Isabelly']



console.log(nome[3].concat(' Linda'), nome[1].concat(' Feio'))


let maxNum = 50

for(let i = 0; i<=maxNum;i++){
    // console.log(i)
}


class Obj {
    constructor(){
        this.name = [],
        this.age = [],
        this.gender = 'Genero Padrão'
    }
    
    storagePersons(){
        return this.name[0].concat(' ', objTest.age[0] + ' anos')
    }

    amazonStorage(){
        return objTest.name
    }

    
}

const objTest = new Obj()

objTest.name[0] = 'Guilherme'
objTest.name[1] = 'Joao'
objTest.name[2] = 'Luana'

objTest.age[0] = 10

//console.log(objTest.name[0].concat(' ',objTest.age[0] + ' anos'))


console.log(objTest.storagePersons())

console.log(objTest.amazonStorage())


