function isPrime(num) {
// 1 3 5 7 11 13 17 19 23 29 31 37  

    if (num <= 1) {
        console.log('false');
        return;
    } else if (num == 2) {
        console.log('true');
        return;
    }
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i == 0 ) {
            console.log(i);
            return;
        }
    }
    console.log('true');
}
isPrime(101);  
