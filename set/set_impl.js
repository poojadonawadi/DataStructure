class CustomSet {
    constructor() {
      this.items = {};
    }
  
    add(value) {
      this.items[value] = true;
    }
  
    has(value) {
      return this.items.hasOwnProperty(value);
    }
  
    delete(value) {
      if (this.has(value)) {
        delete this.items[value];
        return true;
      }
      return false;
    }
  
    clear() {
      this.items = {};
    }
  
    size() {
      return Object.keys(this.items).length;
    }
  
    values() {
      return Object.keys(this.items);
    }
  }
  
  // Example usage
  const customSet = new CustomSet();
  customSet.add(1);
  customSet.add(2);
  customSet.add(3);
  console.log(customSet.values()); // Output: [ '1', '2', '3' ]
  console.log(customSet.has(2));  // Output: true
  customSet.delete(2);
  console.log(customSet.values()); // Output: [ '1', '3' ]
  