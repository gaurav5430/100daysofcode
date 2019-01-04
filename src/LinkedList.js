class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = undefined;
    }

    get length() {
        let count = 0;
        for(let item in this) {
            count++;
        }

        return count;
    }

    // [Symbol.iterator]() {
    //     let temp = this.head;
    //     const iterator = {
    //         next() {
    //             if(temp) {
    //                 let value = temp.value;
    //                 temp = temp.next;
    //                 return { value, done: false }
    //             }
    //             return { done: true }
    //         }
    //     }

    //     return iterator;
    // }

    * [Symbol.iterator]() {
        let temp = this.head;
        while(temp) {
            yield temp.value;
            temp = temp.next;
        }
    }

    add(item) {
        const node = new Node(item, null);
        if (this.head === undefined) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while(temp.next) {
                temp = temp.next;
            }

            temp.next = node;
        }
    }

    traverse() {
        let temp = this.head;
        do {
            console.log(temp.value);
            temp = temp.next;
        } while(temp);
    }

    remove(key) {
        let current = this.head;
        let prev = this.head;
        let count = 0;
        while(current) {
            if(current.value === key) {
                prev.next = current.next;
                count++;
            }

            else {
                prev = current;
            }

            current = current.next;
        }

        return count;
    }
}