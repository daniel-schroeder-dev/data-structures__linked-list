const LinkedList = require('./linked-list.js');

const linkedList = new LinkedList();

linkedList.insertFirstNode('bob');
linkedList.insertNodeAt('django', 0);
linkedList.printListData();
console.log('Node at 0: ', linkedList.getNodeAt(2));

