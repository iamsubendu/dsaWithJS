// A binary tree is a type of tree data structure in which
// each node has at most two children, referred to as the
// left child and the right child.Each node contains
// a key / value pair, with the key serving as a unique
// identifier and the value storing some associated data.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  traversePreOrder(node = this.root, visit = console.log) {
    if (!node) return;
    visit(node.value);
    this.traversePreOrder(node.left, visit);
    this.traversePreOrder(node.right, visit);
  }

  traverseInOrder(node = this.root, visit = console.log) {
    if (!node) return;
    this.traverseInOrder(node.left, visit);
    visit(node.value);
    this.traverseInOrder(node.right, visit);
  }

  traversePostOrder(node = this.root, visit = console.log) {
    if (!node) return;
    this.traversePostOrder(node.left, visit);
    this.traversePostOrder(node.right, visit);
    visit(node.value);
  }
}
