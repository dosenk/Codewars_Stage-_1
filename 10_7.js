function findDup(arr){
    console.log(arr.find(function(val) {
      return arr.indexOf(val) > 1
    }))
  }
  let arr = [1, 2, 15, 34, 1, 3, 4, 1, 3];

  findDup(arr);