class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length;
    }
    clear(){
        return this.items=[]
    }
}

const objStack = new Stack()

objStack.push(1)
objStack.push(2)
objStack.push(3)
objStack.push(4)
objStack.push(5)
objStack.push(6)


//ultimo elemento adicionado
console.log('Peek:')
console.log(objStack.peek())

console.log(objStack)

console.log('Size:')
console.log(objStack.size())

console.log('Pop:')
console.log(objStack.pop())

console.log(objStack)

console.log('Size_2:')
console.log(objStack.size())



objStack.clear()
console.log('Clear:')
console.log(objStack)