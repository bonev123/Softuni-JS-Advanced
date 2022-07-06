function addRemove(arr) {
    let result = [];
    let number = 1
    arr.forEach((el) => {
        if (el == 'add') {
            result.push(number);
        } else {
            result.pop();
        }

        number += 1
    })
        if(result.length == 0) {
            console.log("Empty")
        } else {
            console.log(result.join("\n"))
        }
        
    }


addRemove(['add', 
'add', 
'add', 
'add']
)