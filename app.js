'use strict';

const LinkedList = require('./ll.js');


const ll = LinkedList.fromValues(1,3,2,4);

ll.insertAtHead('A');
ll.insertAtIndex(1,5);
ll.insertAtIndex(1,6);
ll.insertAtIndex(4,'middle');
ll.insertAtIndex(ll.length,9);
console.log(ll);
ll.print();