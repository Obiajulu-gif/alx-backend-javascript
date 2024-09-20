const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
	describe("SUM operation", () => {
		it("should return 4 when adding 1 and 3", async () => {
			const { expect } = await import("chai");
			expect(calculateNumber("SUM", 1, 3)).to.equal(4);
		});

		it("should return 5 when input are 1 and 3.7", async () => {
			const { expect } = await import("chai");
			expect(calculateNumber("SUM", 1, 3.7)).to.equal(5);
		});
	});
	describe("SUBTRACT operation", () => {
		it("should return -4 when input are 1.4 and 4.5", async () => {
			const { expect } = await import("chai");
			expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
		});
		it("should return 0 when input are 3.5 and 3.5 for SUBTRACT", async () => {
			const { expect } = await import("chai");
			expect(calculateNumber("SUBTRACT", 3.5, 3.5)).to.equal(0);
		});
	});

	describe("DIVIDE operation", () => {
		it("should return 2 when input are 10 and 5 for DIVIDE", async () => {
			const { expect } = await import("chai");
			expect(calculateNumber("DIVIDE", 10, 5)).to.equal(2);
		});

		it("should return 'Error' when input are 10 and 0 for DIVIDE", async () => {
			const { expect } = await import("chai");
			expect(calculateNumber("DIVIDE", 10, 0)).to.equal("Error");
		});

		it("should return 2.5 when input are 4.5 and 2 for DIVIDE", async () => {
			const { expect } = await import("chai");
			expect(calculateNumber("DIVIDE", 4.5, 2)).to.equal(2.5);
		});
	});
});
