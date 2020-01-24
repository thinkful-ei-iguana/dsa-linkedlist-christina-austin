const LinkedList = require('./index.js')
const SLL = new LinkedList();

function main() {
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertBefore('Typo', 'Apollo');
    SLL.insertAfter('Freyja', 'Typo');
    SLL.insertAt('Test', 0);
  
   // console.log(SLL.find('Test'));
  }
  
  main();

  function display() {
      let dis = [];
      let current = SLL.head;
          while(current !== null) {
            dis = [...dis, current.value];
            current = current.next
          }
          return dis;
      }
    console.log(display(SLL));


function listSize() {
    let number = 0;
    let current = SLL.head;
    while(current != null) {
        number ++;
        current = current.next
    }
    return number;
}
listSize();


  function isEmpty() {
    if(SLL.head === null) {
        return true;
    }
    return false;
}
isEmpty();


function findPrev(SLL, item) {
    let current = SLL.head;
    let prev = SLL.head;

    while(current !== null) {
        if(current.value === item) {
            return prev.value
        }
        prev = current;
        current = current.next
    }
}
console.log(findPrev(SLL, 'Starbuck'));

function findLast(SLL) {
    let current = SLL.head;

    while(current !== null) {
        if(current.next === null) {
            return current
        }
        current = current.next;
    }
}
findLast(SLL);

//drill 4 ---- O(n) || O(log(n))

function reverseList(SLL) {
    const newList = SLL;
    if(SLL.head === null) {
        return null;
    } else {
        let current = SLL.head;
        while(current !== null) {
            newList.insertFirst(current.value);
            current = current.next
        }
    }
    console.log(display(newList));
    return newList;
}
reverseList(SLL);

function findThird(SLL) {
    let current = SLL.head;
    let prev = SLL.head;
    let res = SLL.head;
    while(current.next !== null) {
        res = prev -2;
        prev = current;
        current = current.next;
    }
    return res.value;
}
console.log(findThird(SLL));
