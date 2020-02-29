function cake(x, y) {
    let sum = 0;
    for (let i = 0; i < y.length; i++) {
      if (i%2 != 0) {
          sum += y[i].charCodeAt(0) - 96;
          console.log(sum);
      } else {
          sum += (y[i].charCodeAt(0));
          console.log(sum);
      }
    }
    if (sum*100/x >= 70) {
        return 'Fire!';
        } else {
        return 'That was close!';
    }
}

cake(100, 70)