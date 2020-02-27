function distinct(a){
    return a.reduce(function(n, v, i){
        let idx = a.lastIndexOf(v);
        while (idx != -1 || idx == i) {
            idx = (idx == i ? -1 : a.lastIndexOf(v, idx - 1));
            idx == -1 ? a : a.splice(a.lastIndexOf(v), 1);
        }
        return a;
    }, []);
}

distinct([1,2,3,3,4,5,6,1,1,6,1]);