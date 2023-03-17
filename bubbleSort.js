let arr = new Array(2,4,6,1,5)

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
}

function defaultCompare(a,b){
  return a<b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

function swap(array,a,b){
    [array[a],array[b]] = [array[b], array[a]] //trocando a posição dos arrays
}

function bubbleSort(array, compareFn = defaultCompare){
    const {length} = array //pegando o valor numérico do array
    for(let i=0; i<length;i++){
      for(let j=0;j<length-1;j++){
        if(compareFn(array[j], array[j+1])===Compare.BIGGER_THAN){//se a chamada da função compareFn for igual a 1 
          swap(array, j, j+1) //chama a função swap e faz a troca
        }
      }
    }
  return console.log(array)
}


bubbleSort(arr);