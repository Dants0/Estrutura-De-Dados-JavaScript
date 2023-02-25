class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
        this.message = 'Pilha com conteudo'
    }
    push(item){
        this.items[this.count] = item;
        this.count++;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.count === 0;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1];
    }
    clear(){
        this.count = 0;
        this.items = {};
        return this.message = "Pilha esvaziada";
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`
        for(let i = 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

const obj = new Stack()


obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.push(5)

const elemTop = obj.peek();
const elemSize = obj.size();
const checkStack = obj.isEmpty()

console.log(obj)

console.log('Elemento do topo: ' + elemTop)
console.log('Tamanho Obj: ' + elemSize)
console.log('Está vazia?: ' + checkStack)
console.log('Conteudo em String do Objeto:' + obj.toString())


console.log('--------------------------------------------------------------------')

//removendo ult elemento
obj.pop()

console.log(obj)

console.log('Elemento do topo: ' + obj.peek())
console.log('Tamanho Obj: ' + obj.size())
console.log('Está vazia?: ' + obj.isEmpty())
console.log('Conteudo em String do Objeto:' + obj.toString())


obj.clear()
console.log('Limpando Pilha: ' + obj.clear())
console.log(obj)
console.log('Está vazia?: ' + obj.isEmpty())
