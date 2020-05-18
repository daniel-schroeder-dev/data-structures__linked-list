const Node = require('./node.js');
const IndexOutOfBoundsError = require('./index-out-of-bounds-error.js');

class LinkedList {
	
	constructor() {
		this.head = null;
		this.size = 0;
	}

	clear() {
		this.head = null;
		this.size = 0;
	}

	insertFirstNode(data) {
		const firstNode = new Node(data, this.head);
		this.head = firstNode;
		this.size++;
	}

	insertLastNode(data) {
	
		this.size++;
		const lastNode = new Node(data);

		if (!this.head) {
			this.head = lastNode;
			return;
		}
		
		let currentNode = this.head;

		while (currentNode) {
			if (!currentNode.next) {
				currentNode.next = lastNode;
				return;
			}
			currentNode = currentNode.next;
		}

	}

	insertNodeAt(data, i) {
	
		if (!i) return this.insertFirstNode(data);
		if (i > this.size || i < 0) throw new IndexOutOfBoundsError(i);
		if (i === this.size) return this.insertLastNode(data);
		
		let currentIndex = 0;
		let currentNode = this.head;
		
		while (currentIndex !== (i - 1)) {
			currentNode = currentNode.next;
			currentIndex++;
		}

		currentNode.next = new Node(data, currentNode.next);
		this.size++;

	}

	getNodeAt(i) {
	
		if (i >= this.size || i < 0) throw new IndexOutOfBoundsError(i);
		
		let currentNode = this.head;
		let currentIndex = 0;
		
		while (currentIndex !== i) {
			currentNode = currentNode.next;
			currentIndex++;
		}
		
		return currentNode.data;

	}

	removeNodeAt(i) {
		
		if (i >= this.size || i < 0) throw new IndexOutOfBoundsError(i);

		let currentNode = this.head;
		let currentIndex = 0;
	
		while (currentIndex != (i - 1)) {
			currentNode = currentNode.next;
			currentIndex++;
		}
	
		const data = currentNode.next.data;
	
		currentNode.next = currentNode.next.next;
		this.size--;
	
		return data;
	
	}

	getListData() {
	
		let currentNode = this.head;
		const listData = {
			size: this.size,
			data: [],
		};
	
		while (currentNode) {
			listData.data.push(currentNode.data);
			currentNode = currentNode.next;
		}
	
		return listData;
	
	}

}

module.exports = LinkedList;
