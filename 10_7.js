function findDup(arr){
    console.log(arr.reduce(function(n, v, i){
      return arr.lastIndexOf(v) == i ? n : v;
    }, null));
  }

findDup([2,6,8,3,4,5,9,2]);