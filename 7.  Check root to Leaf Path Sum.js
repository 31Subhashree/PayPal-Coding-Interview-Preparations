function hasPathSum(root, sum){
    if(!root) return false;
    if(!root.left && !root.right) return sum === root.value;
    return hasPathSum(root.left, sum - root.value) || hasPathSum(root.right, sum - root.value);
}