function getFibonator() {
    let prev = 0
    let current = 1
    function inner() {
        let next = current + prev
        prev = current
        current = next
        return prev
    }
    return inner;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
