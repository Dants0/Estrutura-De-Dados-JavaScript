class Stack{
    constructor(){
        this.count = 0;
        this.items = {};
    }
    push(item){
        this.items[this.count] = item;
        this.count++;
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
        return this.items[this.items.length - 1]
    }
    size(){
        return this.items.length;
    }
    clear(){
        return this.items=[]
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

function DecimalForBinary (decNumber){
    const obj = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while(number>0){
        rem = Math.floor(number%2);
        obj.push(rem);
        number = Math.floor(number/2);
    }
    while(!obj.isEmpty()){
        obj.toString();
        binaryString += obj.pop().toString();
    }
    return binaryString;
}

console.log('Conversão Decimal para Binario: ' + DecimalForBinary(21))