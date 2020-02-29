function findShort(s){
 return s.match(/(\w){1,}/g).reduce(function(n, v) {
    return v > n ? n : v;
 })
}