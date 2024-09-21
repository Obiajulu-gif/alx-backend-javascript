const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");
const { afterEach } = require("mocha");

describe("sendPaymentRequestToApi", () => {
	let consoleSpy;

	beforeEach(() => {
		// Spy on the console.log method
		consoleSpy = sinon.spy(console, "log");
	});

	afterEach(() => {
		// restore the original console.log method after each test
		consoleSpy.restore();
	});

	it("should log the correct total for sendPaymentRequestToApi(100, 20)", () => {
		sendPaymentRequestToApi(100, 20);

		expect(consoleSpy.calledOnce).to.be.true;
		expect(consoleSpy.calledWithExactly("The total is: 120")).to.be.true;
	});

	it("should log the correct total for sendPaymentRequestToApi(10,10)", () => {
		sendPaymentRequestToApi(10, 10);
		expect(consoleSpy.calledOnce).to.be.true;
		expect(consoleSpy.calledWithExactly("The total is: 20")).to.be.true;
	});
});
