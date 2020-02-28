// Testing for year

function century(year) {
    let pow = String(year).length <= 1 ? 1 : 2;    
    return Math.ceil(year / Math.pow(10, pow));
}
