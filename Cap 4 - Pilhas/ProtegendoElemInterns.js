class Stack {
    constructor(){
        this._count = 0;
        this._items = [];
    }
    push(item){
        this.items[this.count] = item;
        this.count++;
    }
    isEmpty(){
        return this.count === 0;
    }
    pop(){
        this.items.pop()
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

console.log(stack.items)

stack.pop()

console.log(stack.items)

console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))