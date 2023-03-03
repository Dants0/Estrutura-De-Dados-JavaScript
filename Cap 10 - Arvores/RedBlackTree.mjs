import { defaultCompare } from "../utils/utils.mjs";
import BinarySearchTree from "./BinarySearchTree.mjs";

class RedBlackTree extends BinarySearchTree{
    constructor(compareFn = defaultCompare){
        super(compareFn)
        this.compareFn = compareFn
        this.root = null
    }

    
}