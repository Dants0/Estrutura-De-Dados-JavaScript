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


function baseConverter (decNumber,base){
    const obj = new Stack();
    let digits = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber;
    let rem;
    let baseString = '';
    if(!(base>=2&&base<=36)){
        return '';
    }
    while(number>0){
        rem = Math.floor(number%base);
        obj.push(rem);
        number = Math.floor(number/base);
    }
    while(!obj.isEmpty()){
        baseString += digits[obj.pop()];
    }
    return baseString;
}

console.log('Base de 2:' + baseConverter(550, 2))
console.log('Base de 8:' + baseConverter(550, 8))
console.log('Base de 16:' + baseConverter(550, 16))
console.log('Base HEXADECIMAL:' + baseConverter(550, 32))