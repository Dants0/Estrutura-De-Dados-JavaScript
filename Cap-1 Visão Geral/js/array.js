//seq fibonacci


const fibo = []
fibo[1] = 1
fibo[2] = 2

for(let i = 3; i<15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

for(let i = 1; i<fibo.length; i++){
    console.log(fibo[i]);
}


let array = [];

array.push(1,2,3,4,5); //add no array

console.log(array)

array.pop();//removendo ult elem no array

console.log(array)

array.unshift(-5,-4,-3,-2,-1,0)//add no inico do array

console.log(array)

console.log(array.length)

array.pop()

console.log(array)

array.pop()

console.log(array)

array.shift()//remove primeiro elem do array

console.log(array)

array.splice(3,2)//remove dois elementos a partir do 3º indice

console.log(array)

array.splice(3, 0, -1,0,3,4,5)//add 0 informa que não quer remover nenhum elemento

console.log(array)