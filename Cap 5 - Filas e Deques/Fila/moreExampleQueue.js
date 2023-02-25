class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
        this.message = this.message
    }
    enqueue(item){
        this.items[this.count] = item;
        this.count++;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }
    toString(){
        if(this.isEmpty()){
            return 'Empty';
        }
        let objString =  `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }
    clear(){
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
        return this.message = 'Vazio'
    }
    size(){
        return this.count - this.lowestCount
    }
}

const q = new Queue();

q.enqueue('Guilherme')
q.enqueue('Teste')
q.enqueue('MoreTests')

console.log(q.toString() + ' --> Tamanho da Fila: ' + q.size())

q.dequeue()
q.dequeue()

console.log(q.toString() + ' --> Tamanho da Fila: ' + q.size())

q.enqueue('Scopo')

console.log(q.toString() + ' --> Tamanho da Fila: ' + q.size())

