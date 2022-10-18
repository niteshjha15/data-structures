// this is binary search tree implementation
// A binary search tree has following charecterstics:
// 1.) Each node can have at most 2 child nodes i.e. not more than 2 child nodes.
// 2.) If the added new node is less then the parent node then it will be added to left edge of parent node and
//     if the new node is greate than parent node than it will be added to right edge.
// Check "BinarySearchTree.drawio" file.

// this will create a new node refer to diagram for refrence.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class DataTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insertNode(root, newNode) {
    // checks if newNode value is less then root node.
    if (root.value > newNode.value) {
      // if new node is small than root node we need to focus on left side of tree as per BST rule so we
      // check if root node is the leaf node(i.e. root node has no left child).
      // if the root has no left child we insert the new node to left of root.
      if (root.left === null) {
        root.left = newNode;
      } else {
        // If the root's left child is not null i.e. we need to reach last left leaf i.e. the last left node in tree
        // so we can insert this new node to the left of last node.
        // we do so by recursively calling the same function passing in the left child's as a root.
        this.insertNode(root.left, newNode);
      }
      // same as above but this time we check for greater value and focus on right side
    } else if (root.value < newNode.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  search(root, value) {
    if (this.isEmpty()) return false;
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      }
      if (root.value > value) {
        return this.search(root.left, value);
      }
      if (root.value < value) {
        return this.search(root.right, value);
      }
    }
  }
}

const newTree = new DataTree();
console.log("is tree empty", newTree.isEmpty());
newTree.insert(10);
newTree.insert(20);
newTree.insert(30);
console.log("is tree empty", newTree.isEmpty());
console.log("value", newTree.search(newTree.root,10));
