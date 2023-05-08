function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
// Depth-First Search (DFS) on a Binary Tree:
function dfs(node, value) {
  if (node === null) {
    return false;
  }
  if (node.value === value) {
    return true;
  }
  return dfs(node.left, value) || dfs(node.right, value);
}
// Breadth-First Search (BFS) on a Binary Tree:
function bfs(root, value) {
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value === value) {
      return true;
    }
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return false;
}
