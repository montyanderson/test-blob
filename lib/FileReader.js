module.exports = class FileReader {
	constructor() {
		this.readyState = 0;
		this.onload = () => {};
	}

	set result(result) {
		this._result = result;
		this.onload(this._result);
	}

	get result() {
		return this._result;
	}

	readAsArrayBuffer(blob) {
		this.result = new Uint8Array(blob._array).buffer;
	}

	readAsBinaryString(blob) {
		this.result = blob._array.toString();
	}

	readAsTextString(blob) {
		this.result = blob._array.toString();
	}
}
