function findDup(arr){
    arr.sort(function(a, b) { return a - b; });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i+1]) {
            return arr[i];
        }
        
    }
}

findDup(arr);