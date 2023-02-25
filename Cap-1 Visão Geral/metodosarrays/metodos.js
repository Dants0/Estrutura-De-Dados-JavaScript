//concat 

const zero = 0
let numbersC = [3,2,1]
let numbersB = [-3,-2,-1]

let numbers = numbersB.concat(zero, numbersC)

//console.log(numbers)

let values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function isEven(numbers) {
    //console.log(numbers)
    return numbers%2 === 0 ? true:false;
}





//values.every(isEven)
//values.some(isEven)
//values.forEach(numbers => console.log(numbers%2===0))




//map

const myMap = values.map(isEven);




//filter

//const evenNumbers = values.filter(isEven)


//reduce
//recebe uma funcao com os parametros: previousValue, currentValue, index e array. index e array são opcionais.
values.reduce((previous, current) => previous + current);




//entries - devolve os pares de a chave e valor
let aEntries = values.entries();

//console.log(aEntries.next().value)
//console.log(aEntries.next().value)
//console.log(aEntries.next().value)
//console.log(aEntries.next().value)


aEntries = values.entries();
for(const n of aEntries){
    //console.log(n)
}



//keys - contem as chaves do array
const aKeys = values.keys();
//console.log(aKeys.next())
//console.log(aKeys.next())
//console.log(aKeys.next())


//values - contem os valores do array
const aValues = values.values();
//console.log(aValues.next())
//console.log(aValues.next())
//console.log(aValues.next())



//from - cria outro array a partir de um array existente
let values_2 = Array.from(values, x=>(x%2==0))

//console.log(values_2)



//cria oturo array a partir dos argumentos passados para o metodo
let numbersCopy = Array.of(1,2,3,4,5,6,7,8,9)

//fill - preenche o array com somente um valor
numbersCopy.fill(2,1)

console.log(numbersCopy)


//copyWithin - copia uma seq de valores do array para a posicao de um indice de inicio
let copyArray = [1,2,3,4,5,6,7,8,9]

copyArray.copyWithin(0,3);

console.log(copyArray)


//reverte o array
copyArray.reverse()

console.log(copyArray)

//sort - deixa em ordem lexicografica, pressupoe que todos os elem do array são strings
copyArray.sort()

console.log(copyArray)