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

    reverselist() {
        let current = this.tail;
        for (let i = this.size; i > 0; i--) {
            let a = this.head;
            for (let j = 1; j < i; j++) {
                a = a.next;
            }
            a.next = null;
            current.next = a;
            current = current.next;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

}
let list = new linklist(100);
list.addlist(200);
list.addlist(300);
list.addlist(400);
list.addlist(500);
list.reverselist();
console.log("Reverse", list);