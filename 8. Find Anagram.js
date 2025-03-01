function groupAnagram(arr){
    let group = new Map();
    
    for (let word of arr){
        let sortedWord = word.split("").sort().join();
        
        if(!group.has(sortedWord)){
            group.set(sortedWord, []);
        }
        group.get(sortedWord).push(word);
    }
    console.log(Array.from(group.values()))
    return Array.from(group.values());
}

let arr = ["eat","tea","tan","ate","nat","bat"];
groupAnagram(arr);

