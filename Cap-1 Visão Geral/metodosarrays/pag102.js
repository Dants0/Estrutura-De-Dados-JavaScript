let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

// console.log(numeros.indexOf(3))

function multipleOf5(elem, i, array){
    return (elem%5==0);
}

// console.log(numeros.find(multipleOf5))
// console.log(numeros.findIndex(multipleOf5))

//se o array possuir o valor passado como parametro, ele devolve true, se nao, false;
// console.log(numeros.includes(27))

const addTrace = numeros.join('-')

console.log(addTrace.toString())