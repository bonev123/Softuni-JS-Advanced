function solve(...params) {
    let result = [];
    let occurrences = {};
    params.forEach(el => {
        let type = typeof(el);
        result.push(`${type}: ${el}`)
        occurrences[type] = occurrences[type] !== undefined
        ? occurrences[type] + 1
        : 1;
    });
    Object.keys(occurrences) // izpolzvame object.keys vmesto object.values zashtoto ni trqbvat key stoinostite pri printa
    .sort((a, b) => occurrences[b] - occurrences[a])
    .forEach(key => result.push(`${key} = ${occurrences[key]}`));
    return result.join('\n');
}

console.log((solve('cat', 42, function () { console.log('Hello world!'); })))