// function printList(list) {
//     let obj = list;

//     while (obj) {
//         console.log(obj.value);
//         obj = obj.next;
//     }

// }
function printList(list) {
    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }
}

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

printList(list);