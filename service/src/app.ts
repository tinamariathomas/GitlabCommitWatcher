import * as express from 'express';
import getCommits from './handlers/commits';
const app = express();

app.get('/', (req, res) => {
	res.send("Typescript, is here");
});

app.get('/commits', async (req,res) => {
	const commits = await getCommits();

	res.setHeader('Content-Type', 'application/json');
	res.send(commits.data);
});
app.listen(3001, () => {console.log("Listening on port 3001")});

