const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
	it("should return 4 when adding 1 and 3", () => {
		assert.strictEqual(calculateNumber(1, 3), 4);
	});

	it("should return 5 when input are 1 and 3.7", () => {
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});
	it("should return 5 when input are 1.2 and 3.7", () => {
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});
	it("should return 6 when input are 1.5 and 3.7", () => {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});
	it("should handle negative number e.g -1.2 and -3.7 should return -5", () => {
		assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
	});
	it("should handle negative number e.g -1.2 and -3.7 should return -5", () => {
		assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
	});
});
