class stack{
    //array is used to implement the stack
    constructor(){
        this.items = [];
        this.count = 0;
    }
    
    //adding elements into the stack
    push(element){
        this.items.push(element) ;
        this.count++;
    }
   
    // removing elements from the stack
    pop(){
        if (this.items.length > 0){
            this.count--;
            return this.items.pop(); 
        }
        else{
            console.log("The Stack is Empty");
        }
    }
   
    //the recently added element in the stack
    peek(){
        return this.items[this.items.length - 1];
    }
   
    //display stack elements
    print(){
        return this.items.join(", ");
    }
}

let myStack = new stack();
myStack.push(200);
myStack.push(500);
myStack.push(400);
myStack.push(100);
myStack.push(600);
myStack.push(700);

console.log(myStack.count);
console.log("the stack elements are: ", myStack.print());
console.log("The poped element is :", myStack.pop());
console.log("The top element in the stack is :", myStack.peek());