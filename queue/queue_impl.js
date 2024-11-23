class queue{
    constructor(){
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(element){
        this.items.push(element);
        this.rear++;

    }
    dequeue(){
        if(this.front !== this.rear){
            const dequeued = this.items[front];
            this.front++;
            return dequeued; 
        }
        else{
            console.log("The Queue is Empty");
        }
    }
    peek(){
        if(this.front !== this.rear){
            return this.items[this.front];
        }
        else{
            console.log("The queue id empty");
        }  
    }

    print(){
        return this.items.slice(this.front, this.rear).join(", ");
    }
}
const myQueue = new queue();
myQueue.enqueue(28);
myQueue.enqueue(29);
myQueue.enqueue(10);
myQueue.enqueue(30);


console.log("The queue elements are :", myQueue.print());
console.log("The front element in the queue is:", myQueue.peek());

