const { expect } = require("chai");
const request = require("request");
const { exec } = require("child_process");

describe("Index page", () => {
	const baseUrl = "http://localhost:7865";
	let server;

	before((done) => {
		server = exec("node api.js", (error) => {
			if (error) {
				console.error(`Error starting server: ${error}`);
			}
		});
		setTimeout(done, 1000);
	});

	after((done) => {
		server.kill();
		done();
    });
    
    it("should return the coreect status code", (done) => {
      request.get(baseUrl, (error, response) => {
          expect(response.statusCode).to.equal(200);
          done()
      })
    })

    it("should return the correct result", (done) => {
        request.get(baseUrl, (error, response, body){
            expect(body).to.equal('Welcome to the payment system');
            done()
      })
    })
});

describe('Available payments', () => {
    const baseUrl = 'http://localhost:7865/available_payments';

    it('should return the correct payment methods', (done) => {
        request.get(baseUrl, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false,
                },
            });
            done();
        });
    });
});

// New test suite for the login endpoint
describe('Login endpoint', () => {
    const baseUrl = 'http://localhost:7865/login';

    it('should return welcome message with username', (done) => {
        request.post({
            url: baseUrl,
            json: { userName: 'Betty' },
        }, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});

// New test suite for the cart page
describe('Cart page', () => {
    const baseUrl = 'http://localhost:7865/cart';

    it('should return the correct status code when :id is a number', (done) => {
        request.get(`${baseUrl}/12`, (error, response) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return 404 status code when :id is NOT a number', (done) => {
        request.get(`${baseUrl}/hello`, (error, response) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });     
});
