function printReverseList(list) {
    let obj = list;
    let arr = [];

    while (obj) {
        console.log(obj);
        arr.push(obj.value);
        obj = obj.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// function printReverseList(list) {
//     if (list.next) {
//         printList(list.next);
//     }
//     console.log(list.value);
// }

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printReverseList(list);