class linklist {
    constructor(d) {
        this.head = {
            data: d,
            next: null
        }

        this.tail = this.head;
        this.size = 1;
    }

    addlist(value) {
        let addNew = {
            data: value,
            next: null
        }

        this.tail.next = addNew;
        this.tail = addNew;
        this.size++;
    }


    findMiddle() {
        let current = this.head;

        let mid = this.size / 2;
        for (let i = 1; i < mid; i++) {
            current = current.next;
        }
        return current.data;
    }


}

let list = new linklist(500);
list.addlist(600);
list.addlist(700);
list.addlist(800);
list.addlist(900);
console.log(list);
console.log("Middle", list.findMiddle());
