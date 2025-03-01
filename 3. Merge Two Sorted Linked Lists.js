function mergeSortedLists(A, B){
    let dummy = new ListNode(0);
    let current = dummy;

    while( A && B){
        if( A.value < B.value){
            current.next = A;
            A = A.next;
        } else{
            current.next = B;
            B = B.next;
        }
        current = current.next;
    }
    current.next = A || B;
    return dummy.next;
}

// TC : O(n + m)
// SC: O(1)