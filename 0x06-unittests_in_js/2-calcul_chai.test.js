import { expect } from "chai";
import calculateNumber from "./2-calcul_chai.js";

describe("calculateNumber", () => {
	describe("SUM operation", () => {
		it("should return 4 when adding 1 and 3", () => {
			expect(calculateNumber("SUM", 1, 3)).to.equal(4);
		});

		it("should return 5 when input are 1 and 3.7", () => {
			expect(calculateNumber("SUM", 1, 3.7)).to.equal(5);
		});
	});

	describe("SUBTRACT operation", () => {
		it("should return -4 when input are 1.4 and 4.5", () => {
			expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
		});

		it("should return 0 when input are 3.5 and 3.5 for SUBTRACT", () => {
			expect(calculateNumber("SUBTRACT", 3.5, 3.5)).to.equal(0);
		});
	});

	describe("DIVIDE operation", () => {
		it("should return 2 when input are 10 and 5 for DIVIDE", () => {
			expect(calculateNumber("DIVIDE", 10, 5)).to.equal(2);
		});

		it("should return 'Error' when input are 10 and 0 for DIVIDE", () => {
			expect(calculateNumber("DIVIDE", 10, 0)).to.equal("Error");
		});

		it("should return 2.5 when input are 4.5 and 2 for DIVIDE", () => {
			expect(calculateNumber("DIVIDE", 4.5, 2)).to.equal(2.5);
		});
	});
});
