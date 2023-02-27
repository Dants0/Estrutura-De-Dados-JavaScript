import { Compare, defaultCompare } from "../utils/utils.mjs";
import { Node } from "../models/node.mjs";

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null
    }

    //Esse método insere uma nova chave na árvore
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }


    //Percurso em-ordem

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    //Percurso pré-ordem

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }

    //Percurso pós-ordem

    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    //min será o retorno exposto ao usuário, o qual chama o método minNode.

    min() {
        return this.minNode(this.root)
    }

    //minNode nos permite encontrar uma chave minima a partir de qualquer nó da árvore. percorrendo do lado esquerdo da árvore

    minNode(node) {
        let current = node

        while (current != null && current.left != null) {
            current = current.left
        }
        return current;
    }

    //max

    max() {
        return this.maxNode(this.root)
    }

    //maxNode percorresmo a aresta direita da árvore, até encontrar o último nó na extremidade direita dela

    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right
        }
        return current
    }


    //Pesquisando um valor especifico
    search(key) {
        return this.searchNode(this.root, key)
    }

    //Pesquisando um valor especifico
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key)
        } else {
            return true;
        }

    }

    remove(key) {
        return this.root = this.removeNode(this.root, key);
    }

    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            if (node.left == null) {
                node = node.right
                return node
            } else if (node.right == null) {
                node = node.left
                return node;
            }

            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node;
        }
    }




}


const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(2)
tree.insert(1)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

const printNode = (value) => console.log(value)
console.log('--------------------')
console.log('Em ordem')
tree.inOrderTraverse(printNode)
console.log('--------------------')
console.log('Pré ordem')
tree.preOrderTraverse(printNode)
console.log('--------------------')
console.log('Pós ordem')
tree.postOrderTraverse(printNode)

console.log('--------------------')
console.log(tree.search(25) ? 'Key 25 found' : 'Key 25 not found')
console.log(tree.search(30) ? 'Key 30 found' : 'Key 30 not found')
console.log('--------------------')

console.log(tree.minNode(11))
console.log(tree.min(11))