# Binary Search Tree (BST)

This repository showcases a JavaScript implementation of a Binary Search Tree (BST) along with a set of methods for efficient manipulation and interaction with the tree. The `Tree` class and the accompanying `Node` class are central components of this implementation.

## Assignment: Binary Search Tree Operations

This section illustrates various operations that can be performed on the Binary Search Tree (BST):

1. `insert(value)`: Inserts a new node with the given `value` into the BST while maintaining the BST property.

2. `delete(value)`: Removes the node with the specified `value` from the BST while preserving the BST structure.

3. `find(value)`: Searches for a node with the specified `value` in the BST and returns the node if found.

4. `levelOrder(callback)`: Traverses the BST in breadth-first level order and provides each node as an argument to the provided callback function or returns an array of values if no function is given.

5. `inorder(callback)`: Traverses the BST in inorder (left-root-right) and yields each node to the provided callback function or returns an array of values if no function is given.

6. `preorder(callback)`: Traverses the BST in preorder (root-left-right) and yields each node to the provided callback function or returns an array of values if no function is given.

7. `postorder(callback)`: Traverses the BST in postorder (left-right-root) and yields each node to the provided callback function or returns an array of values if no function is given.

8. `height(node)`: Returns the height of a specific node, defined as the number of edges in the longest path from the node to a leaf node.

9. `depth(node)`: Returns the depth of a specific node, defined as the number of edges in the path from the node to the tree's root node.

10. `isBalanced()`: Checks if the BST is balanced, where the difference between heights of the left subtree and right subtree of every node is not more than 1.

11. `rebalance()`: Rebalances an unbalanced tree to ensure efficient operations.

Feel free to utilize this BST implementation as a foundational tool for various data structure and algorithm exercises or as a reference for working with BSTs in JavaScript.
