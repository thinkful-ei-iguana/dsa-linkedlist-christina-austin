//-----starter------

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, null)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }

    insertBefore(item, itemBefore) {
        let newNode = new _Node(item, null);
        if(!this.head) {
            return null;
        }
        if(this.head.value === itemBefore) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let prev = this.head;

        while(current !== null) {
            if (current.value === itemBefore) {
                newNode.next = current;
                prev.next = newNode;
                return;
            }
            prev = current;
            current = current.next;
        }
        console.log(`cannot find ${itemBefore}`);
        return;
    }

    insertAfter(item, itemAfter) {
        const newNode = new _Node(item, null);
        if (!this.head) {
            return null;
        }
        else {
            let current = this.head;
            while ((current.value !== itemAfter) && (current !== null)) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    insertAt(item, index){
        let newNode = new _Node(item, null);
        if(index < 0){
          console.log('index out of bounds');
          return;
        }
        if(index === 0){
          newNode.next = this.head;
          this.head = newNode;
          return;
        }
        
        
        let prev = this.head;
        let current = this.head;
        for(let i =0; i < index; i++){
          if(current === null){
            console.log('index out of bounds');
            return;
          }
          prev = current;
          current = current.next;
        }
    
        newNode.next = current;
        prev.next = newNode;
      }

    find(item) {
        let currNode = this.head;

        if(!this.head) {
            return null;
        }

        while(currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found')
            return;
        }
        previousNode.next = currNode.next;
    }
}

module.exports = LinkedList;