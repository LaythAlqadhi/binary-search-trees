class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array) {
    const arr = this.parseArray(array);
    const start = 0;
    const end = arr.length - 1;

    function buildTreeRec(array, start, end) {
      if (start > end) return null;

      const mid = Math.floor((start + end) / 2);

      const node = new Node(arr[mid]);
      node.left = buildTreeRec(arr, start, mid - 1);
      node.right = buildTreeRec(arr, mid + 1, end);
      return node;
    }

    this.root = buildTreeRec(arr, start, end);
  }

  parseArray(array) {
    const uniqueArray = [...new Set(array)];
    return uniqueArray.sort((a, b) => a - b);
  }

  insert(value) {
    function insertRec(root, value) {
      if (root === null) {
        root = new Node(value);
        return root;
      }

      if (root.value > value) root.left = insertRec(root.left, value);
      else if (root.value < value) root.right = insertRec(root.right, value);

      return root;
    }
    insertRec(this.root, value);
  }

  delete(value) {
    function deleteRec(root, value) {
      if (root === null) return root;

      if (root.value > value) {
        root.left = deleteRec(root.left, value);
      } else if (root.value < value) {
        root.right = deleteRec(root.right, value);
      }

      if (root.left === null) {
        let tmp = root.right;
        root = null;
        return tmp;
      } else if (root.right === null) {
        let tmp = root.left;
        root = null;
        return tmp;
      } else {
        let succParent = root;

        let succ = root.right;
        while (succ.left !== null) {
          succParent = succ;
          succ = succ.left;
        }

        if (succParent !== root) {
          succParent.left = succ.right;
        } else {
          succParent.right = succ.right;
        }

        root.value = succ.value;

        succ = null;
        return root;
      }
    }
    deleteRec(this.root, value);
  }

  find(value) {
    function findRec(root, value) {
      if (root === null) return root;

      if (root.value > value) {
        root.left = this.findRec(root.left, value);
      } else if (root.value < value) {
        root.right = this.findRec(root.right, value);
      }
      return console.log(root);
    }
    findRec(this.root, value);
  }

  levelOrder(callback = null) {
    const result = [];

    function levelOrderRec(node) {
      if (node === null) return result;

      if (callback) {
        callback(node);
      } else {
        result.push(node.value);
      }

      if (node.left) levelOrderRec(node.left);
      if (node.right) levelOrderRec(node.right);
    }
    levelOrderRec(this.root);

    return result;
  }

  preorder(callback = null) {
    const result = [];

    function preorderRec(node) {
      if (node === null) return;

      if (callback) {
        callback(node);
      } else {
        result.push(node.value);
      }

      preorderRec(node.left);
      preorderRec(node.right);
    }
    preorderRec(this.root);

    return result;
  }

  inorder(callback = null) {
    const result = [];

    function inorderRec(node) {
      if (node === null) return;

      inorderRec(node.left);

      if (callback) {
        callback(node);
      } else {
        result.push(node.value);
      }

      inorderRec(node.right);
    }
    inorderRec(this.root);

    return result;
  }

  postorder(callback = null) {
    const result = [];

    function postorderRec(node) {
      if (node === null) return;

      postorderRec(node.left);
      postorderRec(node.right);

      if (callback) {
        callback(node);
      } else {
        result.push(node.value);
      }
    }
    postorderRec(this.root);

    return result;
  }

  height(node) {
    if (node === null) return 0;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node) {
    if (node === null || this.root === null) return;

    const queue = [{ node: this.root, depth: 0 }];

    while (queue.length > 0) {
      const { node: currentNode, depth } = queue.shift();

      if (currentNode === node) {
        return depth;
      }

      if (currentNode.left) {
        queue.push({ node: currentNode.left, depth: depth + 1 });
      }

      if (currentNode.right) {
        queue.push({ node: currentNode.right, depth: depth + 1 });
      }
    }

    return;
  }

  isBalanced(node = this.root) {
    if (node === null) {
      return true;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    ) {
      return true;
    }

    return false;
  }

  rebalance() {
    const arr = this.inorder();
    const result = this.parseArray(arr);
    this.buildTree(result);
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 96];
const tree = new Tree();
tree.buildTree(arr);
prettyPrint(tree.root);
console.log(tree.isBalanced());
console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());
tree.insert(111);
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());
