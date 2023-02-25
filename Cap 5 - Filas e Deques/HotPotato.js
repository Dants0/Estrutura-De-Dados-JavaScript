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


const randomNum = (numbers) => Math.floor(Math.random(numbers*3)*10);



const names = ['Guilherme', 'Felipe', 'Folio', 'Jhon', 'Johannes', 'Nikel']
const result = hotPotato(names, randomNum(10));
result.eliminated.forEach(name=>{
    console.log(`${name} foi eliminado do jogo da batata quente`);
});

console.log(`O vencedor foi ${result.winner}`)



function hotPotato (elementsList, num) {
    const queue = new Queue();
    const eliminatedList  = [];
    for(let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }
    while(queue.size()>1){
        for(let i = 0; i<num ; i++){
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return{
        eliminated: eliminatedList,
        winner: queue.dequeue()
    };
}