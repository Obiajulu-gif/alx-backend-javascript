const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 7865;

app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`API available on localhost port ${PORT}`);
});

app.get("/", (req, res) => {
	res.send("Welcome to the payment system");
});

app.get("/available_payment", (req, res) => {
	res.json({
		payment_methods: {
			credit_cards: true,
			paypal: false,
		},
	});
});

app.post("/login", (req, res) => {
	const username = req.body.username;
	res.send(`Welcome ${username}`);
});

app.get("/cart/:id", (req, res) => {
	const id = req.params.id;
	// Validate that id is a number
	if (!/^\d+$/.test(id)) {
		return res.status(404).send("Not Found");
	}

	res.send(`Payment methods for cart ${id}`);
});
