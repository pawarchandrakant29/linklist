class linklist {
    constructor(d) {
        this.head = {
            data: d,
            next: null
        }
        this.tail = this.head;
        this.size = 1
    }

    addList(value) {
        let newNode = {
            data: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    deleteMiddel() {
        if (this.size === 0) {
            console.log("List is empty.");
            return;
        }

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return;
        }

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;

        }
        prev.next = slow.next;
        this.size--;
    }

}

list = new linklist(100);
list.addList(200);
list.addList(300);
list.addList(400);
list.addList(500);
console.log(list);

list.deleteMiddel();
console.log("Delete Middle", list);