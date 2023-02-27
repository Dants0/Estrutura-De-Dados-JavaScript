import BinarySearchTree from "./BinarySearchTree.mjs";
import { Compare, defaultCompare } from "../utils/utils.mjs";


class AVLTree extends BinarySearchTree{
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }


    //Calculando a altura de um nó
    getNodeHeight(node){
        if(node == null){
            return -1;
        }
        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        )+1;
    }

    getBalanceFator(node){
        const
    }

}