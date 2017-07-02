module.exports = class Blob {
	constructor(array, options = {}) {
		this._array = Buffer.concat(array instanceof Array ? array : [ array ]);
		this._type = options.type || "";
		this._endings = options.endings || "";
	}

	get size() {
		return this._array.byteLength;
	}

	get type() {
		return this._type;
	}
}
