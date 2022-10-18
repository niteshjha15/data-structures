// This class instance creats a new head opject with value and next e.g. {node:10,
//next==null}
class Node {
  constructor(value) {
    this.node = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    }else{
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newNode;
        
    }
    this.size++;
    
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index > 0 && this.size > index) {
      let newNode = new Node(value);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      newNode.next = curr.next;
      curr.next = newNode;
      this.size++;
    }
  }

  removeFrom(index) {
    let removedNode;
    if (index >= this.size || index < 0) {
      return null;
    } else if (index === 0) {
      let refrenceNode;
      removedNode = this.head;
      refrenceNode = this.head.next;
      this.head = refrenceNode;
      this.size--;
      return removedNode.node;
    } else {
      let removedNode;
      let refrenceNode;
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      removedNode = curr.next;
      refrenceNode = removedNode.next;
      curr.next = refrenceNode;
      this.size--;
      return removedNode.node;
    }
  }

  removeByValue(value){
    if(value===this.head.node){
      let temp = this.head.node
      this.head = this.head.next;
      return temp
    }
    let curr = this.head;
    while(curr.next && curr.next.node !==value){
       curr = curr.next
    }
    let removedNode = curr.next;
    if(removedNode){
      curr.next = removedNode.next;
      return removedNode.node
    }
    return null
   
  }

  searchValue(value){
    if(this.isEmpty()){
      return null
    }
    let i = 0;
    let curr = this.head;
    while(curr){
      if(curr.node===value){
        return i
      }
       curr = curr.next;
       i++
    }
    return -1;
  }

  reverseList(){
    let curr = this.head;
    let prev = null;

    while(curr){
      let next = curr.next;
      curr.next = prev;
      prev=curr;
      curr = next;    
    }
    this.head = prev;
  }

  print() {
    let curr = this.head;
    let values = "";
    while (curr) {
      values += ` ${curr.node}`;
      curr = curr.next;
    }
    return values;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5)
list.append(40)
list.append(50)
list.append(60)
list.append(70)
console.log("list", list.print());
list.reverseList()
console.log("list", list.print());
