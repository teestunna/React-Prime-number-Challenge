const express = require('express');
const { getMedianPrimeNums } = require('./calculateThePrime');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/api/v1/get_nums', ( req, res ) => {
	const result = getMedianPrimeNums(req.body.value);
	res.send(result);
});

app.listen(port, () => console.log(`Server started on port ${port}`));