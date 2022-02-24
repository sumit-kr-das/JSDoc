class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /* insert first node */
    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    /* insert last node */
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if list is empty, make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
        }
    }

    /* insert at index */

    /* insert first node */

    /* remove at index */

    /* clear the list */

    /* print list data */
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(1241)
ll.insertFirst(200)
ll.printListData()