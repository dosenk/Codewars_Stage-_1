function multiply_all(arr) {
    return function (n) {
        return arr.map(v => v * n);
    };
  };