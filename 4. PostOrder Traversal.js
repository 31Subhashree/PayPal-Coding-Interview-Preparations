function postOrderTraversal(root){
    if(!root){
        return [];
    }
    let stack = [root], result = [];

    while(stack.length){
        let node = stack.pop();
        result.unshift(node.value);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    return result;
}

// TC: : O(n)
// SC: O(n)