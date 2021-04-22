import { Node } from "./models/node.js"
import { COMPARE, compareNumber } from "./utils/compare.js"

class BinarySearchTree {
    constructor(compareFn = compareNumber) {
        this.root = null
        this.compareFn = compareFn
    }

    insert(data) {
        if (!this.root) {
            this.root = new Node(data)
            return
        }
        this.checkNode(this.root, data)
    }

    checkNode(node, data) {
        switch (this.compareFn(data, node.data)) {
            case COMPARE.EQUAL:
                return
            case COMPARE.SMALLER:
                this.insertAt(node, data, "left")
                return
            case COMPARE.BIGGER:
                this.insertAt(node, data, "right")
                return
        }
    }

    insertAt(node, data, to) {
        if (node[to] === null) {
            node[to] = new Node(data)
            return
        }
        this.checkNode(node[to], data)
    }

    inOrderTraverse(callBack) {
        this.inOrderTraverseNode(this.root, callBack)
    }

    inOrderTraverseNode(node, callBack) {
        if (node !== null) {
            callBack(node.data)
            this.inOrderTraverseNode(node.left, callBack)
            this.inOrderTraverseNode(node.right, callBack)
        }
    }
}

const binarySearchTree = new BinarySearchTree()

binarySearchTree.insert(7)
binarySearchTree.insert(15)
binarySearchTree.insert(5)
binarySearchTree.insert(3)
binarySearchTree.insert(9)
binarySearchTree.insert(8)
binarySearchTree.insert(10)
binarySearchTree.insert(13)
binarySearchTree.insert(12)
binarySearchTree.insert(14)
binarySearchTree.insert(20)
binarySearchTree.insert(18)
binarySearchTree.insert(25)

binarySearchTree.inOrderTraverse((data) => console.log(data))

console.log(binarySearchTree)

// 1. min => binarySearchTree.min() // min value
// 2. max => binarySearchTree.max() // max value
// 3. reverse => binarySearchTree.reverse()
