function rotate(strings, num) {

    for(let i = 0; i < num; i++) {
        strings.unshift(strings.pop());
    }
    
    
    
    console.log(strings.join(' '));
}


rotate(['1', '2', '3', '4'], 2)