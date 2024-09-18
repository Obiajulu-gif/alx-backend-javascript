// 0-console.test.js
const displayMessage = require("./0-console");

describe("displayMessage", () => {
	it("should print the message to the console", () => {
		console.log = jest.fn();
		const message = "Hello Jest!";
		displayMessage(message);
		expect(console.log).toHaveBeenCalledWith(message);
	});
});
