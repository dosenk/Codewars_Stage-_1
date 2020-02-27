function positiveSum(arr) {
    return arr.reduce(function(n, v){
        return v > 0 ? n+=v : n;
      }, 0);
}

positiveSum([-1,2,3, -2, -9, 1]);