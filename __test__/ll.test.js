const LinkedList = require('../ll.js');



describe('#insertAtHead', ()=>{
  test('it adds the element to the beginning of the list', ()=>{
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);

  })
})

describe('with index zero', ()=>{
  test('insert at head', ()=> {
    const ll = LinkedList.fromValues('A','B','C');
    ll.insertAtIndex(0, 'Z');

    expect(ll.head.value).toBe('Z');
    expect(ll.head.next.value).toBe('A');
    expect(ll.length).toBe(4)

  })

})

describe('with index in middle', ()=>{
  test('insert at provided index', ()=> {
    const ll = LinkedList.fromValues('A','B','C','D');
    ll.insertAtIndex(2, 'Z');
    const node = ll.getByIndex(2);

    expect(node.value).toBe('Z');
    expect(node.next.value).toBe('C');
    expect(ll.length).toBe(5)

  })

})
