function squareDigits(num) {
 for (num, arr = []; num;) {
            arr.unshift(Math.pow(num % 10, 2));
            num = (num - num % 10) / 10;
        };
        return arr.join("");
}