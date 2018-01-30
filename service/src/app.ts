import * as express from 'express';

const app = express()

app.get('/', (req, res) => {
	res.send("Typescript, is here");
});

app.listen(3001, () => {console.log("Listening on port 3001")});

