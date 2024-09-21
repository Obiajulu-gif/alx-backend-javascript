const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
	it("should return a successful response when success is true", function (done) {
		getPaymentTokenFromAPI(true)
			.then((response) => {
				expect(response).to.deep.equal({
					data: "Successful response from the API",
				});
				done(); // Call done to indicate the test is complete
			})
			.catch((err) => done(err)); // If there's an error, pass it to done
	});

	it("should not resolve when success is false", function (done) {
		getPaymentTokenFromAPI(false)
			.then((response) => {
				expect(response).to.be.undefined; // Expect it not to resolve
				done(new Error("Promise should not resolve")); // If it does, fail the test
			})
			.catch(() => {
				// If it correctly does not resolve, call done without an error
				done();
			});
	});
});
