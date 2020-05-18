const LinkedList = require('../linked-list.js');
const IndexOutOfBoundsError = require('../index-out-of-bounds-error.js');

let linkedList;

beforeEach(() => {
	linkedList = new LinkedList();	
});

describe('creates a LinkedList with correct default values', () => {
	test('should have a head property that is null', () => {
		expect(linkedList.head).toBeNull();
	});
	test('should have a size of 0', () => {
		expect(linkedList.size).toEqual(0);
	});
});

describe('LinkedList.insertFirstNode()', () => {

	beforeEach(() => {
		linkedList = new LinkedList();	
	});
	
	test('should insert node as first node of empty LinkedList', () => {
		linkedList.insertFirstNode(1);
		expect(linkedList.head.data).toEqual(1);
	});

	test('should insert node as first node of non-empty LinkedList', () => {
		linkedList.insertFirstNode(1);
		linkedList.insertFirstNode(2);
		expect(linkedList.head.data).toEqual(2);
	});

	test('should increase size by 1 on insertion of new first node', () => {
		expect(linkedList.size).toEqual(0);
		linkedList.insertFirstNode(1);
		expect(linkedList.size).toEqual(1);
	});

});

describe('LinkedList.insertLastNode()', () => {
	
	beforeEach(() => {
		linkedList = new LinkedList();	
	});

	test('should insert node as first node of empty LinkedList', () => {
		linkedList.insertLastNode(1);
		expect(linkedList.head.data).toEqual(1);
	});

	test('should insert node as last node of non-empty LinkedList', () => {
		linkedList.insertFirstNode(1);
		linkedList.insertLastNode(2);
		expect(linkedList.head.next.data).toEqual(2);
	});

	test('should increase size by 1 on insertion of new last node', () => {
		expect(linkedList.size).toEqual(0);
		linkedList.insertLastNode(1);
		expect(linkedList.size).toEqual(1);
	});

});

describe('LinkedList.insertNodeAt()', () => {
	
	beforeEach(() => {
		linkedList = new LinkedList();	
	});

	test('should insert node at correct position', () => {
		linkedList.insertFirstNode('foo');
		linkedList.insertLastNode('baz');
		linkedList.insertNodeAt('bar', 1);
		expect(linkedList.head.next.data).toEqual('bar');
	});

	test('should increase size by 1 on insertion of new node', () => {
		expect(linkedList.size).toEqual(0);
		linkedList.insertFirstNode('foo');
		linkedList.insertLastNode('baz');
		linkedList.insertNodeAt('bar', 1);
		expect(linkedList.size).toEqual(3);
	});

	test('should insert node at head if no index passed', () => {
		linkedList.insertNodeAt('foo');
		expect(linkedList.head.data).toEqual('foo');
	});

	test('should throw IndexOutOfBoundsError if invalid positive index passed', () => {
		try {
			linkedList.insertNodeAt('foo', 1);
		} catch (e) {
			expect(e).toBeInstanceOf(IndexOutOfBoundsError);
		}
	});

	test('should throw IndexOutOfBoundsError if negative index passed', () => {
		try {
			linkedList.insertNodeAt('foo', -1);
		} catch (e) {
			expect(e).toBeInstanceOf(IndexOutOfBoundsError);
		}
	});

});

describe('LinkedList.getNodeAt()', () => {
	
	beforeEach(() => {
		linkedList = new LinkedList();	
	});

	test('should throw IndexOutOfBoundsError if index is not in LinkedList', () => {
		linkedList.insertFirstNode('foo');
		try {
			linkedList.getNodeAt(2);
		} catch(e) {
			expect(e).toBeInstanceOf(IndexOutOfBoundsError);
		}
	});

	test('should throw IndexOutOfBoundsError if index is negative', () => {
		linkedList.insertFirstNode('foo');
		try {
			linkedList.getNodeAt(-1);
		} catch(e) {
			expect(e).toBeInstanceOf(IndexOutOfBoundsError);
		}
	});

	test('should get the data at the index', () => {
		linkedList.insertFirstNode('foo');
		linkedList.insertLastNode('bar');
		linkedList.insertNodeAt('baz', 2);
		expect(linkedList.getNodeAt(2)).toEqual('baz');
	});

});

describe('LinkedList.getListData()', () => {
	
	beforeEach(() => {
		linkedList = new LinkedList();	
	});

	test('should return correct size and data properties with list data', () => {
		linkedList.insertFirstNode('foo');
		linkedList.insertLastNode('bar');
		const listData = {
			size: 2,
			data: ['foo', 'bar'],
		};
		expect(linkedList.getListData()).toEqual(listData);
	});

	test('should return correct list data on an empty LinkedList', () => {
		const listData = {
			size: 0,
			data: [],
		};
		expect(linkedList.getListData()).toEqual(listData);
	});

});

describe('LinkedList.removeNodeAt()', () => {
	
	beforeEach(() => {
		linkedList = new LinkedList();
		linkedList.insertFirstNode('foo');
		linkedList.insertLastNode('bar');
		linkedList.insertLastNode('baz');	
	});

	test('should return the node data at the given index', () => {
		expect(linkedList.removeNodeAt(1)).toEqual('bar');
	});

	test('should decrement the size of linked list', () => {
		expect(linkedList.size).toEqual(3);
		linkedList.removeNodeAt(1);
		expect(linkedList.size).toEqual(2);
	});

	test('should throw IndexOutOfBoundsError if node to remove is out of range', () => {
		try {
			linkedList.removeNodeAt(3);
		} catch (e) {
			expect(e).toBeInstanceOf(IndexOutOfBoundsError);
		}
	});

	test('should throw IndexOutOfBoundsError if node to remove is negative', () => {
		try {
			linkedList.removeNodeAt(-1);
		} catch (e) {
			expect(e).toBeInstanceOf(IndexOutOfBoundsError);
		}
	});

});

describe('LinkedList.clear()', () => {
	
	beforeEach(() => {
		linkedList = new LinkedList();
		linkedList.insertFirstNode('foo');
		linkedList.insertLastNode('bar');
		linkedList.insertLastNode('baz');	
	});

	test('should have size 0', () => {
		linkedList.clear();
		expect(linkedList.size).toEqual(0);
	});

	xtest('should have head null', () => {
		
	});

});













