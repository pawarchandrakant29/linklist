class linklist {
    constructor(d) {
        this.head = {
            data: d,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    }

    addlist(value) {
        let newNord = {
            data: value,
            next: null
        };

        this.tail.next = newNord;
        this.tail = newNord;
        this.size++;
    }

    viwelist() {
        let currentNord = this.head;
        while (currentNord) {
            console.log(currentNord.data);
            currentNord = currentNord.next;
        }
    }

    deletList(num) {
        let currentNord = this.head;

        for (let i = 1; i < num - 1; i++) {
            currentNord = currentNord.next;
        }

        currentNord.next = currentNord.next.next;
    } 

    updateList(data, num) {
        let currentNord = this.head;

        for (let i = 1; i < num - 1; i++) {
            currentNord = currentNord.next;
        }

        currentNord.next.data = data;
    }
}

let list1 = new linklist(100);
list1.addlist(200);
list1.addlist(400);
list1.viwelist();

list1.updateList(300, 2);
console.log("Updated List:", list1);

list1.deletList(2);
console.log("Delete", list1);
