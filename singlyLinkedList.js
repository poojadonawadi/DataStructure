
// Node class to create nodes for the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class to perform operations like adding, deleting, and displaying elements
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add an element at the end of the linked list
    add(data) {
        let n = new Node(data);

        // If the list is empty, the new node becomes the head
        if (this.head === null) {
            this.head = n;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;  // Traverse to the last node
            }
            temp.next = n;  // Link the last node to the new node
        }
        this.size++;  // Increment the size of the list
    }

    // Add an element at a specific index
    addAt(data, index) {
        // Validate index
        if (index < 0 || index > this.size) {
            console.log("Index is not in the range");
            return;
        }

        let n = new Node(data);  // Create a new node with the given data

        // Special case: Adding at the head
        if (index === 0) {
            n.next = this.head;
            this.head = n;  // Update head to the new node
        } else {
            let temp = this.head;
            let prev = null;
            let currentIndex = 0;

            // Traverse to the position before the target index
            while (currentIndex < index) {
                prev = temp;
                temp = temp.next;
                currentIndex++;
            }

            // Insert the new node between prev and temp
            n.next = temp;
            prev.next = n;
        }

        this.size++;  // Increment the size of the list
    }

    // Delete an element from a specific index
    delete(index) {
        if (index < 0 || index >= this.size) {
            console.log("Index is not in the range");
            return;
        }

        let temp = this.head;

        // Special case: Deleting the head
        if (index === 0) {
            this.head = temp.next;
        } else {
            let prev = null;
            let currentIndex = 0;

            // Traverse to the node at the given index
            while (currentIndex < index) {
                prev = temp;
                temp = temp.next;
                currentIndex++;
            }

            // Link the previous node to the next node
            prev.next = temp.next;
        }

        this.size--;  // Decrement the size of the list
        return temp.data;  // Return the deleted node's data
    }

    // Display all the elements of the linked list
    display() {
        if (this.head === null) {
            console.log("The list is empty");
            return;
        }

        let temp = this.head;
        let str = "";

        // Traverse and build the string representation of the list
        while (temp !== null) {
            str += temp.data;
            if (temp.next !== null) {
                str += " -> ";  // Add a separator if it's not the last node
            }
            temp = temp.next;  // Move to the next node
        }

        console.log(str);  // Output the list as a string
    }
}

// Creating a new linked list instance
let list = new LinkedList();

// Add elements to the list
list.add(10);
list.add(30);
list.add(24);
list.add(15);
list.add(20);
list.add(12);

// Display the elements of the list
console.log("The list elements are: ");
list.display();  // Correct method to display the elements
list.addAt(25, 3);
list.display();
list.delete(4);
list.display();
console.log(this.size());
