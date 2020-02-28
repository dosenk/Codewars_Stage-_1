function factorial(n)
{
    if (n < 0 || n > 12) {
        throw new RangeError("dsf");
    }
    let b = n == 0 ? 1 : 1;
    for (i = 1; i <= n; i++) {
        b *= i;
    }
    console.log(b);  
  }


factorial(-1);