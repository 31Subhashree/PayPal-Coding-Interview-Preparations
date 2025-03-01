function findMissingNumber(arr, n = 100){
    let total = (n * (n +1))/2;
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;
}

// TC : O(n)
// SC: O(1)