class Calculadora{
    constructor(item){
      this.results = [(item)]
    }
    sum(a,b){
      let res = a+b
      return this.results[res] = 'Soma: ' + res
    }
    sub(a,b){
      let res = a-b
      return this.results[res] = 'Subtração: ' + res
    }
    mult(a,b){
      let res = a*b
      return this.results[res] = 'Multiplicação: ' + res
    }
    div(a,b){
      let res = a/b
      return this.results[res] = 'Divisão: ' + res
    }
  }
  
  const calcObj = new Calculadora('Resultados:')
  
  calcObj.sum(7,6)
  calcObj.sub(8,2)
  calcObj.mult(2,2)
  calcObj.div(15,3)
  
  console.log(calcObj)