class IndexOutOfBoundsError extends Error {
	constructor(i) {
		super(`Index ${i} out of bounds`);
		this.name = 'IndexOutOfBoundsError';
	}
}

module.exports = IndexOutOfBoundsError;
