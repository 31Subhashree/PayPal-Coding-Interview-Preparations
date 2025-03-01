function mergeAndCount(arr, temp, left, mid, right) {
    let i = left, j= mid, k = left, invCount = 0;
    while(i<= mid -1 && j<= right) {
        if(arr[i] <=arr[j]){
            temp[k++] = arr[i++];
        }else{
            temp[k++] = arr[j++];
            invCount += (mid-i);
        }
    }

    while(i <= mid -1) temp[k++] = arr[i++];
    while(j <= right) temp[k++] = arr[j++];
    for (i = left; i <= right; i++)
        arr[i] = temp[j++];
    for(i = left; i <= right; i++) arr[i] = temp[i];
    return invCount;
}

function countInversions(arr){
    function mergeAndCount(arr,temp, left, right){
        let mid, invCount = 0;
        if(right > left){
            mid = Math.floor((left + right)/2);
            invCount += mergeAndCount(arr,temp, left, mid);
            invCount += mergeAndCount(arr,temp, mid+1, right);
            invCount += mergeAndCount(arr,temp, left, mid+1, right);
        }
        return invCount;
    }
    return mergeAndCount(arr, Array(arr.length), 0, arr.length -1);
}

// Approach I used as Merge Sort to count the inversions
// Time complexity : O(n log n)
// Space complexity : O(n)