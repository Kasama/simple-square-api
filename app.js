const express = require('express');

const app = express();
const port = 3000;

app.get("/square/:number", (req, res) => {
	const number = Number(req.params.number);
	res.send({result: number*number});
});

app.listen(port, () => {
	console.log(`Started app on port ${port}`);
});
