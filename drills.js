const LinkedList = require('./index.js')

function main() {
    const SLL = new LinkedList();
  
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertBefore('Typo', 'Apollo');
    SLL.insertAfter('Freyja', 'Typo');
    SLL.insertAt('Test', 0);
  
    console.log(SLL.find('Test'));
  }
  
  main();