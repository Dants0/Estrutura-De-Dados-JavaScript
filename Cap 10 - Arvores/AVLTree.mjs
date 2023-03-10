import BinarySearchTree from "./BinarySearchTree.mjs";
import { Compare, BalanceFactor, defaultCompare } from "../utils/utils.mjs";

class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }


    //Calculando a altura de um nó
    getNodeHeight(node) {
        if (node == null) {
            return -1;
        }
        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        ) + 1;
    }


    getBalanceFator(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    //rotação simples a direita
    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp
    }

    //rotação simples a esquerda
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp_left;
        tmp_left = node;
        return tmp;
    }

    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node)
    }

    insert(key) {
        this.root = this.insertNode(this.root, key)
    }

    insertNode(node, key) {
        
        const balancedFactor = this.getBalanceFator(node);

        if (node == null) {
            return new Node(key)
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key)
        } else {
            return node;
        }

        if (balancedFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node)
            }
        }

        if (balancedFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.left.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node)
            }

        }

        return node;
    }

    removeNode(node, key){
        node = super.removeNode(node, key)
        if(node == null){
            return node;
        }

        const balanceFactor = this.getBalanceFator(node);
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            const balanceFactorLeft = this.getBalanceFator(node.left);
            if(balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                return this.rotationLL(node)
            } 
            if(balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                return this.rotationLR(node.left);
            }
        }

        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
            const balanceFactorRight = this.getBalanceFator(node.right);
            if(balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                return this.rotationRR(node)
            }
            if(balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                return this.rotationRL(node.right);
            }
        }
        return node;
    }

}
