function increase(arr) {
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    arr.forEach((el) => {
        if (el >= biggest) {
            result.push(el);
            biggest = el;
        }
    })
    return result;
}     


console.log(increase([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))