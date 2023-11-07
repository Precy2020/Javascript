
const Node = require("./node")

class LinkedList{
    constructor(){
        this.head == null;
        this.count == 0;

        this.insertAtHead = (value) => {
            let newNode = new Node(value);
            newNode.nextElement = this.head;
            this.head = newNode;

            this.count = this.count + 1
        }
        this.getHead = () => {
            if(this.head != null){
                return this.head.value;
            }  
        }
        
        
    }
}


LinkedList.prototype.isEmpty = function(){
    this.head === null;
}

LinkedList.prototype.printElements = function(){
    let element = this.head;

    while (element !== undefined & element !== null){
        process.stdout.write(`${element.value} -> `);
        element = element.nextElement;
    }
    process.stdout.write('null');
}
LinkedList.prototype.deleteAtHead = function(){
    let element = this.head;
    this.head = element.nextElement;

}

LinkedList.prototype.len = function () {
    process.stdout.write(this.count);
    }

LinkedList.prototype.removeDuplicate = function(){
    let current = this.head;

   while (current !== null){
    let value = current;
    while (value.nextElement !== null){
        if(value.nextElement.value === current.value){
            value.nextElement = value.nextElement.nextElement;
        }
        else{
            value = value.nextElement;
        }
    }
   }
   current = current.nextElement;
}





module.exports = LinkedList;
