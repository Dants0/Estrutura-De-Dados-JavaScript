class Deque{
    constructor(){
        this.count = 0;
        this.items = {}
        this.lowestCount = 0;
    }
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element);
        }else if(this.lowestCount > 0){
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }else{
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i-1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element; 
        }           
    }
    addBack(element){
        if(this.isEmpty()){
            this.addBack(element);
        }else if(this.lowestCount > 0){
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }else{
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i-1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element; 
        }          
    }
    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    removeBack(){
        return removeFront()
    }
    peekFront(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.lowestCount]
    }

    peekBack(){
        return peekFront()
    }

    size(){
        return this.count - this.lowestCount
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

    clear(){
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
        return this.message = 'Vazio'
    }
}


const d = new Deque();

d.addFront('TesteNome')

console.log(d.toString())