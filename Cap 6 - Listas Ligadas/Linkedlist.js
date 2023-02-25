class LinkedList{
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn
    }
    
    //colocar elemento
    push(element){
        const node = new Node(element);
        let current;
        if(this.head==null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next != null){
                current = current.next
            }
            current.next = node;
        }
        this.count++;
    }
    
    //remover passando o index
    removeAt(index){
        if(index>=0&&index<this.count){
            let current = this.head
            if(index===0){
                this.head = current.next;
            }else{
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next
            }
        this.count--;
        return current.element;
        }
    return undefined; 
    }
    
    //pegar elemento passando o index do elemento
    getElementAt(index){
        if(index>= 0 && index<= this.count){
            let node = this.head;
            for(let i = 0; i<index && node !=null; i++){
                node = node.next;
            }
            return node
        }
        return undefined
    }
    
    //inserir novo elemento
    insert(element, index){
        if(index>=0&&index<=this.count){
            const node = new Node(element);
            if(index === 0){
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous = this.getElementAt(index-1)
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count--;
            return true
        }
        return false
    }
    
    //pegar o indexOf do elemento
    indexOf(element){
        let current = this.head;
        for(let i = 0; i<this.count&&current != null;i++){
            if(this.equalsFn(element, current.element)){
                return i
            }
            current = current.next
        }
        return -1
    }
    
    //remover elemento especifico
    remove(element){
        const index = this.indexOf(element);
        return this.removeAt(index)
    }
    
    size(){
        return this.count;
    }
    
    isEmpty(){
        return this.size()===0
    }
    
    getHead(){
        return this.head
    }
    
    toString(){
        if(this.head == null){
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for(let i = 0 ;  i < this.size() && current != null; i++){
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }
}

class Node{
    constructor(element){
        this.element = element;
        this.next = undefined
    }
}

function defaultEquals(a,b){
    return a===b
}



const list = new LinkedList()

list.push('cactos')
list.push(2)
list.push('test')
list.push('Brasil')
list.push(27)
list.push(500)

console.log('Inicio da lista =>')
console.log(list)

//list.removeAt(1)
//list.removeAt(1)
console.log('--------------------')


//console.log('removeAt =>')
//console.log(list)


console.log(list.getElementAt(4))


list.insert('Outro', 2);

console.log('Insert =>')
console.log(list)

console.log(list.getElementAt(2))

console.log(list.indexOf('Outro'))

//list.remove('cactos')

//console.log(list)

console.log(list.indexOf('cactos'))
